import { useState } from "react";
import { Link } from "react-router-dom";
import LoginPopup from "../LoginPopup";

function ResponsiveHeader() {
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigationItems = [
    {
      title: "Gardening",
      href: "/gardening",
      subCategories: [
        { title: "Tools", href: "/gardening/tools" },
        { title: "Accessories", href: "/gardening/accessories" },
      ],
    },
    {
      title: "Plants",
      href: "/plants",
      subCategories: [
        { title: "Indoor", href: "/plants/indoor" },
        { title: "Outdoor", href: "/plants/outdoor" },
      ],
    },
    {
      title: "Seeds",
      href: "/seeds",
      subCategories: [
        { title: "Flower Seeds", href: "/seeds/flower" },
        { title: "Vegetable Seeds", href: "/seeds/vegetable" },
      ],
    },
    {
      title: "Bulbs",
      href: "/bulbs",
      subCategories: [
        { title: "Summer Bulbs", href: "/bulbs/summer" },
        { title: "Winter Bulbs", href: "/bulbs/winter" },
      ],
    },
    {
      title: "Planters",
      href: "/planters",
      subCategories: [
        { title: "Plastic Planters", href: "/planters/plastic" },
        { title: "Ceramic Planters", href: "/planters/ceramic" },
      ],
    },
    {
      title: "Soil & Fertilizer",
      href: "/soil-fertilizer",
      subCategories: [
        { title: "Potting Mix", href: "/soil-fertilizer/potting-mix" },
        { title: "Organic Fertilizer", href: "/soil-fertilizer/organic" },
      ],
    },
  ];

  const toggleLoginPopup = () => {
    setIsLoginPopupOpen(!isLoginPopupOpen);
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="top-header">
            <button
              className="mobile-menu-button"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M3 12h18M3 6h18M3 18h18"></path>
              </svg>
            </button>
            <Link to="/" className="logo">
              <span className="logo-green">nursery</span>
              <span className="logo-black">live</span>
            </Link>

            <div className="search-bar">
              <form className="search-form">
                <input
                  type="text"
                  className="search-input"
                  placeholder="What are you looking for?"
                />
                <button type="submit" className="search-button">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </button>
              </form>
            </div>
            <div className="icons1">
              <svg
                className="icon-chat "
                aria-hidden="true"
                focusable="false"
                role="presentation"
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                viewBox="0 0 44 44"
                fill="none"
              >
                <path
                  d="M15.5832 24.75H13.7498L6.4165 32.0833V24.75H2.74984C2.26361 24.75 1.79729 24.5569 1.45347 24.213C1.10966 23.8692 0.916504 23.4029 0.916504 22.9167V2.75001C0.916504 2.26377 1.10966 1.79746 1.45347 1.45364C1.79729 1.10983 2.26361 0.916672 2.74984 0.916672H33.9165C34.4027 0.916672 34.869 1.10983 35.2129 1.45364C35.5567 1.79746 35.7498 2.26377 35.7498 2.75001V13.75"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M19.25 33.9167C19.25 34.4029 19.4432 34.8692 19.787 35.213C20.1308 35.5569 20.5971 35.75 21.0833 35.75H31.1667L39.4167 43.0833V35.75H41.25C41.7362 35.75 42.2025 35.5569 42.5464 35.213C42.8902 34.8692 43.0833 34.4029 43.0833 33.9167V19.25C43.0833 18.7638 42.8902 18.2975 42.5464 17.9536C42.2025 17.6098 41.7362 17.4167 41.25 17.4167H21.0833C20.5971 17.4167 20.1308 17.6098 19.787 17.9536C19.4432 18.2975 19.25 18.7638 19.25 19.25V33.9167Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </svg>
              <div className="expert-support">
                <div className="support-text">Expert Support</div>
                <div className="support-subtext">Available 24/7</div>
              </div>
            </div>
            <div className="login-link">
              <div>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 24"
                  fill="none"
                  id="svgkp"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 21V19.5C1 17.29 2.79 15.5 5 15.5H13C15.21 15.5 17 17.29 17 19.5V21"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  ></path>
                  <path
                    d="M8.84998 11.9199C11.3353 11.9199 13.35 9.9052 13.35 7.41992C13.35 4.93464 11.3353 2.91992 8.84998 2.91992C6.36469 2.91992 4.34998 4.93464 4.34998 7.41992C4.34998 9.9052 6.36469 11.9199 8.84998 11.9199Z"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  ></path>
                  <path
                    d="M19.8855 11.8047C20.5863 11.0339 20.0394 9.7975 18.9976 9.7975H16.0286L17.889 2.791C18.2115 1.57631 16.6867 0.745902 15.8413 1.67584L16.4209 2.20279L15.8413 1.67584L6.27813 12.1953C5.57736 12.9661 6.12429 14.2025 7.16606 14.2025H10.135L8.27467 21.209C7.95214 22.4237 9.47701 23.2541 10.3224 22.3242L9.75271 21.8063L10.3224 22.3242L19.8855 11.8047Z"
                    fill="url(#paint0_linear_1777_502)"
                  ></path>
                  <path
                    d="M19.8855 11.8047C20.5863 11.0339 20.0394 9.7975 18.9976 9.7975H16.0286L17.889 2.791C18.2115 1.57631 16.6867 0.745902 15.8413 1.67584L16.4209 2.20279L15.8413 1.67584L6.27813 12.1953C5.57736 12.9661 6.12429 14.2025 7.16606 14.2025H10.135L8.27467 21.209C7.95214 22.4237 9.47701 23.2541 10.3224 22.3242L9.75271 21.8063L10.3224 22.3242L19.8855 11.8047Z"
                    fill="#FEA200"
                  ></path>
                  <path
                    d="M19.8855 11.8047C20.5863 11.0339 20.0394 9.7975 18.9976 9.7975H16.0286L17.889 2.791C18.2115 1.57631 16.6867 0.745902 15.8413 1.67584L16.4209 2.20279L15.8413 1.67584L6.27813 12.1953C5.57736 12.9661 6.12429 14.2025 7.16606 14.2025H10.135L8.27467 21.209C7.95214 22.4237 9.47701 23.2541 10.3224 22.3242L9.75271 21.8063L10.3224 22.3242L19.8855 11.8047Z"
                    stroke="#fff"
                    strokeWidth="1.6"
                  ></path>{" "}
                  <defs>
                    {" "}
                    <linearGradient
                      id="paint0_linear_1777_502"
                      x1="13.0818"
                      y1="7.59083"
                      x2="13.0818"
                      y2="18.6367"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FFD100"></stop>
                      <stop offset="1" stopColor="#FEA200"></stop>{" "}
                    </linearGradient>{" "}
                  </defs>{" "}
                </svg>
              </div>
              <div className="login-text" onClick={toggleLoginPopup}>
                Login
              </div>
            </div>
            <button className="cart-button">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
            </button>
          </div>
          <div className="mobile-search">
            <form className="search-form">
              <input
                type="text"
                className="search-input"
                placeholder="What are you looking for?"
              />
              <button type="submit" className="search-button">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </button>
            </form>
          </div>
          <div className="mobile-24support">
            <div className="support24icon">
              <svg
                className="icon-chat "
                aria-hidden="true"
                focusable="false"
                role="presentation"
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                viewBox="0 0 44 44"
                fill="none"
              >
                <path
                  d="M15.5832 24.75H13.7498L6.4165 32.0833V24.75H2.74984C2.26361 24.75 1.79729 24.5569 1.45347 24.213C1.10966 23.8692 0.916504 23.4029 0.916504 22.9167V2.75001C0.916504 2.26377 1.10966 1.79746 1.45347 1.45364C1.79729 1.10983 2.26361 0.916672 2.74984 0.916672H33.9165C34.4027 0.916672 34.869 1.10983 35.2129 1.45364C35.5567 1.79746 35.7498 2.26377 35.7498 2.75001V13.75"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M19.25 33.9167C19.25 34.4029 19.4432 34.8692 19.787 35.213C20.1308 35.5569 20.5971 35.75 21.0833 35.75H31.1667L39.4167 43.0833V35.75H41.25C41.7362 35.75 42.2025 35.5569 42.5464 35.213C42.8902 34.8692 43.0833 34.4029 43.0833 33.9167V19.25C43.0833 18.7638 42.8902 18.2975 42.5464 17.9536C42.2025 17.6098 41.7362 17.4167 41.25 17.4167H21.0833C20.5971 17.4167 20.1308 17.6098 19.787 17.9536C19.4432 18.2975 19.25 18.7638 19.25 19.25V33.9167Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </svg>
              <div className="expert-support-mobile">
                <div className="support-text">Expert Support</div>
                <div className="support-subtext">Available 24/7</div>
              </div>
            </div>
          </div>
        </div>
        <nav className="bottom-nav">
          <div className="container">
            <ul className="nav-list">
              {navigationItems.map((item) => (
                <li key={item.href} className="nav-item">
                  <button className="nav-button">
                    {item.title}
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>
                  {item.subCategories && (
                    <div className="dropdown">
                      {item.subCategories.map((subCategory) => {
                        <Link key={subCategory.href} href={subCategory.href}>
                          {subCategory.title}
                        </Link>;
                      })}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </nav>
        {isMobileMenuOpen && (
          <div className="mobile-menu active">
            <button
              className="mobile-menu-close"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <nav>
              {navigationItems.map((item) => (
                <div key={item.href} className="mobile-nav-item">
                  <Link href={item.href} className="mobile-nav-link">
                    {item.title}
                  </Link>
                  {item.subCategories && (
                    <div className="mobile-dropdown">
                      {item.subCategories.map((subCategory) => (
                        <Link key={subCategory.href} href={subCategory.href}>
                          {subCategory.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </header>
      {isLoginPopupOpen && <LoginPopup onClose={setIsLoginPopupOpen} />}
    </>
  );
}
export default ResponsiveHeader;
