import { useState } from "react";

function Navbar({ searchTerm, setSearchTerm, cartCount, wishlistCount, onCartClick }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <div className="logo">
          Shop<span>Sphere</span>
        </div>

        {/* Search */}
        <div className="search-box">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <button>🔍</button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Navigation */}
        <div className={`nav-actions ${menuOpen ? "active" : ""}`}>

          <button className="nav-icon">
            ♡
            {wishlistCount > 0 && (
              <span className="badge">{wishlistCount}</span>
            )}
          </button>

          <button
            className="nav-icon"
            onClick={onCartClick}
          >
            🛒
            {cartCount > 0 && (
              <span className="badge">{cartCount}</span>
            )}
          </button>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;