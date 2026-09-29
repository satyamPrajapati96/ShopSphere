function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-tag">NEW COLLECTION 2026</p>

        <h1>
          Discover Products
          <br />
          You'll Love.
        </h1>

        <p className="hero-description">
          Explore our latest collection of fashion,
          accessories and everyday essentials.
        </p>

        <button
          className="shop-button"
          onClick={() => {
            document
              .getElementById("products")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Shop Now →
        </button>
      </div>

      <div className="hero-visual">
        <div className="hero-circle">
          🛍️
        </div>

        <div className="floating-card card-one">
          ⭐ 4.9 Rating
        </div>

        <div className="floating-card card-two">
          🔥 Trending
        </div>
      </div>
    </section>
  );
}

export default Hero;