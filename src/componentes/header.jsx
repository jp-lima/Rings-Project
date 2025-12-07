import { useLocation, Link } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <header className="header">
      {/* Top Bar */}
      <div className="header__top">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-7">
              <div className="header__top__left">
                <p>Free shipping, 30-day return or refund guarantee.</p>
              </div>
            </div>

            <div className="col-lg-6 col-md-5">
              <div className="header__top__right">
                <div className="header__top__links">
                  <a href="#">Logar</a>
                  <a href="#">FAQs</a>
                </div>

                <div className="header__top__hover">
                  <span>
                    USD <i className="arrow_carrot-down"></i>
                  </span>
                  <ul>
                    <li>USD</li>
                    <li>EUR</li>
                    <li>BRL</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container">
        <div className="row">
          {/* Logo */}
          <div className="col-lg-3 col-md-3">
            <div className="header__logo">
              <a href="/">
                <img src="/img/logo.png" alt="logo" />
              </a>
            </div>
          </div>

          {/* Menu */}
          <div className="col-lg-6 col-md-6">
            <nav className="header__menu mobile-menu">
              <ul>
                <li className={currentPath === "/" ? "active" : ""}>
                  <Link to="/">Inicio</Link>
                </li>

                <li className={currentPath === "/shop" ? "active" : ""}>
                  <Link to="/shop">Produtos</Link>
                </li>

                <li
                  className={
                    currentPath === "/about" ||
                    currentPath === "/shop-details" ||
                    currentPath === "/shopping-cart" ||
                    currentPath === "/checkout" ||
                    currentPath === "/blog-details"
                      ? "active"
                      : ""
                  }
                >
                  <a href="#">Paginas</a>
                  <ul className="dropdown">
                    <li><Link to="/about">Sobre nós</Link></li>
                    <li><Link to="/shop-details">Detalhes da Compra</Link></li>
                    <li><Link to="/shopping-cart">Carrinho</Link></li>
                    <li><Link to="/checkout">Check Out</Link></li>
                    <li><Link to="/blog-details">Blog Details</Link></li>
                  </ul>
                </li>

                <li className={currentPath === "/blog" ? "active" : ""}>
                  <Link to="/blog">Blog</Link>
                </li>

                <li className={currentPath === "/contact" ? "active" : ""}>
                  <Link to="/contact">Contato</Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Icons */}
          <div className="col-lg-3 col-md-3">
            <div className="header__nav__option">
              <a href="#">
                <img src="/img/icon/search.png" alt="search" />
              </a>

              <a href="#">
                <img src="/img/icon/heart.png" alt="favorites" />
              </a>

              <a href="#">
                <img src="/img/icon/cart.png" alt="cart" />
                <span>0</span>
              </a>

              <div className="price">$0.00</div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <div className="canvas__open">
          <i className="fa fa-bars"></i>
        </div>
      </div>
    </header>
  );
}
