function ProductCard({
  product,
  onAddToCart,
  onToggleWishlist,
  isWishlisted,
}) {
  return (
    <article className="product-card">

      {/* Product Image */}
      <div className="product-image">
        <img
          src={product.image}
          alt={product.name}
        />

        <button
          className={`wishlist-button ${
            isWishlisted ? "wishlisted" : ""
          }`}
          onClick={() => onToggleWishlist(product.id)}
          aria-label="Add to wishlist"
        >
          {isWishlisted ? "♥" : "♡"}
        </button>

        {product.badge && (
          <span className="product-badge">
            {product.badge}
          </span>
        )}
      </div>

      {/* Product Information */}
      <div className="product-info">

        <p className="product-category">
          {product.category}
        </p>

        <h3>{product.name}</h3>

        <div className="product-rating">
          ⭐ {product.rating}
        </div>

        <div className="product-bottom">

          <div className="product-price">
            ₹{product.price.toLocaleString("en-IN")}
          </div>

          <button
            className="add-cart-button"
            onClick={() => onAddToCart(product)}
          >
            Add to Cart
          </button>

        </div>
      </div>
    </article>
  );
}

export default ProductCard;