function Cart({ cart, onClose, onUpdateQuantity, onRemoveItem }) {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-overlay" onClick={onClose}>
      <aside
        className="cart-panel"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cart Header */}
        <div className="cart-header">
          <div>
            <p className="section-tag">YOUR BAG</p>
            <h2>Shopping Cart</h2>
          </div>

          <button
            className="close-cart"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        {/* Cart Items */}
        <div className="cart-items">
          {cart.length === 0 ? (
            <div className="empty-cart">
              <div className="empty-cart-icon">🛒</div>

              <h3>Your cart is empty</h3>

              <p>
                Add some products and they will appear here.
              </p>
            </div>
          ) : (
            cart.map((item) => (
              <div className="cart-item" key={item.id}>
                
                <img
                  src={item.image}
                  alt={item.name}
                />

                <div className="cart-item-info">
                  <h3>{item.name}</h3>

                  <p>
                    ₹{item.price.toLocaleString("en-IN")}
                  </p>

                  <div className="quantity-controls">
                    <button
                      onClick={() =>
                        onUpdateQuantity(
                          item.id,
                          item.quantity - 1
                        )
                      }
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() =>
                        onUpdateQuantity(
                          item.id,
                          item.quantity + 1
                        )
                      }
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  className="remove-item"
                  onClick={() => onRemoveItem(item.id)}
                >
                  🗑️
                </button>
              </div>
            ))
          )}
        </div>

        {/* Cart Footer */}
        {cart.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Total</span>

              <strong>
                ₹{total.toLocaleString("en-IN")}
              </strong>
            </div>

            <button className="checkout-button">
              Proceed to Checkout →
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}

export default Cart;