import { useState } from 'react';
import { Link } from 'react-router-dom';

// import '../styles/header.css';


function ResponsiveHeader() {
  
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

  return (
    <header className="header">
      <div className="container">
        <div className="top-header">
          <button className="mobile-menu-button" onClick={() => setIsMobileMenuOpen(true)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18M3 6h18M3 18h18"></path>
            </svg>
          </button>
          <Link href="/" className="logo">
            <span className="logo-green">nursery</span>live
          </Link>
          <div className="search-bar">
            <form className="search-form">
              <input type="text" className="search-input" placeholder="What are you looking for?" />
              <button type="submit" className="search-button">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </button>
            </form>
          </div>
          <div className="expert-support">
            <div className="support-text">Expert Support</div>
            <div className="support-subtext">Available 24/7</div>
          </div>
          <button className="cart-button">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
          </button>
        </div>
        <div className="mobile-search">
          <form className="search-form">
            <input type="text" className="search-input" placeholder="What are you looking for?" />
            <button type="submit" className="search-button">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </form>
        </div>
      </div>
      <nav className="bottom-nav">
        <div className="container">
          <ul className="nav-list">
            {navigationItems.map((item) => (
              <li key={item.href} className="nav-item">
                <button className="nav-button">
                  {item.title}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
                {item.subCategories && (
                  <div className="dropdown">
                    {item.subCategories.map((subCategory) => (
                      <Link key={subCategory.href} href={subCategory.href}>
                        {subCategory.title}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
      {isMobileMenuOpen && (
        <div className="mobile-menu active">
          <button className="mobile-menu-close" onClick={() => setIsMobileMenuOpen(false)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
  );
}
export default ResponsiveHeader

