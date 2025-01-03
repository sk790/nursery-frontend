import  { useState } from 'react';
import './GardeningSidebar.css';

const gardeningData = {
  categories: [
    {
      title: "Gardening",
      items: [
            {
              title: "Trending in Gardening",
              items: [
                    {
                      title: "Bestsellers in Gardening",
                      url: "#",
                    },
                    {
                      title: "Indoor Garden",
                      url: "#",
                    },
                    {
                      title: "Winter Special Gardening Packs",
                      url: "#",
                    },
                    {
                      title: "Balcony and Terrace Garden",
                      url: "#",
                    }, 
                    {
                      title: "Vertical Garden",
                      url: "#",
                    },
                     {
                      title: "Miniature Gardens",
                      url: "#",
                    }, 
                    {
                      title: "Garden Kits",
                      url: "#",
                    }, 
                    {
                      title: "Top 3 Plants' Packs",
                      url: "#",
                    }, 
                    {
                      title: "Top 5 Plants' Packs",
                      url: "#",
                    }, 
                    {
                      title: "Indoor Plants' Packs",
                      url: "#",
                    }, 
                    {
                      title: "Air Purifying Plants' Packs",
                      url: "#",
                    }, 
                    {
                      title: "Cactus and Succulents' Packs",
                      url: "#",
                    }, 
                    {
                      title: "Flowering Plants' Packs",
                      url: "#",
                    },
                    {
                      title: "Low Maintenance Plants' Packs",
                      url: "#",
                    },
              ],
            },
            {
              title: "Plants' Packs by Features",
              items: [
                {
                    title: "Air Purifying Plants' Packs",
                    url: "#",
                },
                {
                    title: "Cactus and Succulents' Packs",
                    url: "#",
                },
                {
                    title: "Flowering Plants' Packs",
                    url: "#",
                },
                {
                    title: "Hanging Basket Plants' Packs",
                    url: "#",
                },
                {
                    title: "Indoor Plants' Packs",
                    url: "#",
                },
                {
                    title: "Low Maintenance Plants' Packs",
                    url: "#",
                },
                {
                    title: "Lucky Plants' Packs",
                    url: "#",
                },
              ],
            },
            {
              title: "Plants' Packs by Features",
              items: [],
            },
          ],
    },
    {
      title: "Plants",
      items: [],
    },
    {
      title: "Seeds",
      items: [
        {
          title: "Bulbs",
          items: [
            {
              title: "Trending Flower Bulbs",
              items: [],
            },
            {
              title: "Bulbs by Sowing Time",
              items: [
                {
                  title: "Flower Bulbs to Sow in All Seasons",
                  url: "#",
                },
                {
                  title: "Winter Sowing Bulbs",
                  url: "#",
                },
                {
                  title: "Summer Sowing Bulbs",
                  url: "#",
                },
                {
                  title: "Rainy Sowing Bulbs",
                  url: "#",
                },
              ],
            },
          ],
        },
        {
          title: "Bulbs by Flower Color",
          items: [],
        },
        {
          title: "Bulbs by Name",
          items: [],
        },
      ],
    },
    {
      title: "Planters",
      items: [
        {
          title: "Bulbs",
          items: [
            {
              title: "Trending Flower Bulbs",
              items: [],
            },
            {
              title: "Bulbs by Sowing Time",
              items: [
                {
                  title: "Flower Bulbs to Sow in All Seasons",
                  url: "#",
                },
                {
                  title: "Winter Sowing Bulbs ",
                  url: "#",
                },
                {
                  title: "Summer Sowing Bulbs ",
                  url: "#",
                },
                {
                  title: "Rainy Sowing Bulbs",
                  url: "#",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      title: "Soil & Fertilizer",
      items: [],
    },
  ],
};

function CategoryItem({ title, items, level = 0, isActive }) {
  const [isOpen, setIsOpen] = useState(false);

  if (!items?.length) {
    return (
      <li className="sidebar-menu-item">
        <button className={`sidebar-menu-button ${isActive ? 'active' : ''} ${level > 0 ? 'nested' : ''}`}>
          {title}
        </button>
      </li>
    );
  }

  return (
    <li className="sidebar-menu-item font-1">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`sidebar-menu-button ${isActive ? 'active' : ''} ${level > 0 ? 'nested' : ''}`}
      >
        {title}
        <span className={`chevron ${isOpen ? 'open' : ''}`}>^</span>
      </button>
      <div className={`collapsible-content ${isOpen ? 'open' : ''}`}>
        <ul className="sidebar-menu-sub">
          {items.map((item, index) => (
            <CategoryItem
              key={index}
              {...item}
              level={level + 1}
            //   isActive={item.title === "Bulbs by Sowing Time"}
            />
          ))}
        </ul>
      </div>
    </li>
  );
}


export function GardeningSidebar({isMobileMenuOpen,setIsMobileMenuOpen,isLoginPopupOpen,setIsLoginPopupOpen,toggleLoginPopup}) {
  return (
    <div className="sidebar">
        <div className='header-sidebar'>
        <div className="login-link-mobile">
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
            <div className='nav-close'><button
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
            </button></div>
        </div>
      <ul className="sidebar-menu">
        {gardeningData.categories.map((category, index) => (
          <CategoryItem
            key={index}
            {...category}
            isActive={category.title === "Bulbs"}
          />
        ))}
      </ul>
    </div>
  );
}

export default GardeningSidebar;

