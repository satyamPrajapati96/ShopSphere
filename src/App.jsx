import { useEffect, useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategoryFilter from "./components/CategoryFilter";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

import products from "./data/products";

function App() {
  // Search
  const [searchTerm, setSearchTerm] = useState("");

  // Category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Cart
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("shopsphere-cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Wishlist
  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem("shopsphere-wishlist");
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  // Cart open/close
  const [cartOpen, setCartOpen] = useState(false);

  // Sort
  const [sortOption, setSortOption] = useState("default");

  // Save cart to LocalStorage
  useEffect(() => {
    localStorage.setItem("shopsphere-cart", JSON.stringify(cart));
  }, [cart]);

  // Save wishlist to LocalStorage
  useEffect(() => {
    localStorage.setItem(
      "shopsphere-wishlist",
      JSON.stringify(wishlist)
    );
  }, [wishlist]);

  // Categories
  const categories = [
    "All",
    "Clothing",
    "Footwear",
    "Accessories",
    "Electronics",
  ];

  // Filter products
  let filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  // Sort products
  if (sortOption === "low-high") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }

  if (sortOption === "high-low") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  if (sortOption === "rating") {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  // Add product to cart
  const addToCart = (product) => {
    setCart((currentCart) => {
      const existingProduct = currentCart.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        return currentCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...currentCart,
        {
          ...product,
          quantity: 1,
        },
      ];
    });

    setCartOpen(true);
  };

  // Update quantity
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity: newQuantity,
            }
          : item
      )
    );
  };

  // Remove product
  const removeFromCart = (productId) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== productId)
    );
  };

  // Wishlist
  const toggleWishlist = (productId) => {
    setWishlist((currentWishlist) => {
      if (currentWishlist.includes(productId)) {
        return currentWishlist.filter((id) => id !== productId);
      }

      return [...currentWishlist, productId];
    });
  };

  // Total cart quantity
  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="app">

      <Navbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        cartCount={cartCount}
        wishlistCount={wishlist.length}
        onCartClick={() => setCartOpen(true)}
      />

      <Hero />

      <main>
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <section
          className="products-section"
          id="products"
        >
          <div className="products-header">

            <div>
              <p className="section-tag">
                OUR COLLECTION
              </p>

              <h2>Featured Products</h2>

              <p className="product-count">
                {filteredProducts.length} products found
              </p>
            </div>

            <select
              value={sortOption}
              onChange={(e) =>
                setSortOption(e.target.value)
              }
              className="sort-select"
            >
              <option value="default">
                Sort by
              </option>

              <option value="low-high">
                Price: Low to High
              </option>

              <option value="high-low">
                Price: High to Low
              </option>

              <option value="rating">
                Highest Rated
              </option>
            </select>

          </div>

          {filteredProducts.length > 0 ? (
            <div className="products-grid">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={addToCart}
                  onToggleWishlist={toggleWishlist}
                  isWishlisted={wishlist.includes(
                    product.id
                  )}
                />
              ))}
            </div>
          ) : (
            <div className="no-products">
              <div>🔍</div>

              <h3>No products found</h3>

              <p>
                Try another search or category.
              </p>
            </div>
          )}
        </section>
      </main>

      <Footer />

      {cartOpen && (
        <Cart
          cart={cart}
          onClose={() => setCartOpen(false)}
          onUpdateQuantity={updateQuantity}
          onRemoveItem={removeFromCart}
        />
      )}

    </div>
  );
}

export default App;