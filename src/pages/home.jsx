



export default function Home() {
  return (
    <>
      {/* Preloader */}
      <div id="preloder">
        <div className="loader"></div>
      </div>

      {/* Offcanvas Menu */}
      <div className="offcanvas-menu-overlay"></div>
      <div className="offcanvas-menu-wrapper">
        <div className="offcanvas__option">
          <div className="offcanvas__links">
            <a href="#">Logar</a>
            <a href="#">FAQs</a>
          </div>
        </div>
      </div>

    

      {/* Hero */}
      <section className="hero">
        <div className="hero__items" style={{ backgroundImage: "url(img/hero/hero-1.jpg)" }}>
          <div className="container">
            <h2>Fall - Winter Collections 2030</h2>
            <p>Luxury essentials with quality.</p>
            <a href="#" className="primary-btn">Shop Now</a>
          </div>
        </div>
      </section>

      {/* Banner */}
      <section className="banner spad">
        <div className="container">
          <div className="banner__item">
            <img src="img/banner/banner-1.jpg" alt="" />
            <div className="banner__item__text">
              <h2>Clothing Collections 2030</h2>
              <a href="#">Shop now</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer__about">
            <img src="img/footer-logo.png" alt="" />
            <p>Customer is our priority.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
