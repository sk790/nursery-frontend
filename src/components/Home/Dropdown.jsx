import { useState } from "react";
// import "./Dropdown.css";

const Dropdown = () => {
  const [openMain, setOpenMain] = useState(null); // Track the open main category
  const [openChild, setOpenChild] = useState(null); // Track the open child category

  const toggleMain = (index) => {
    setOpenMain(openMain === index ? null : index);
    setOpenChild(null); // Close all sub-children when toggling main
  };

  const toggleChild = (index) => {
    setOpenChild(openChild === index ? null : index);
  };

  const categories = [
    {
      title: "Gardening",
      children: [
        {
          title: "Bulbs",
          children: [
            { title: "Trending Flower Bulbs" },
            {
              title: "Bulbs by Sowing Time",
              children: [
                "Flower Bulbs to Sow in All Seasons (10C to 34C)",
                "Winter Sowing Bulbs (10C to 25C)",
                "Summer Sowing Bulbs (24C to 32C)",
                "Rainy Sowing Bulbs (25C to 34C)",
              ],
            },
            { title: "Bulbs by Flower Color" },
            { title: "Bulbs by Name" },
          ],
        },
      ],
    },
    {
      title: "Plants",
      children: [],
    },
    {
      title: "Seeds",
      children: [
        {
          title: "Bulbs",
          children: [
            { title: "Trending Flower Bulbs" },
            {
              title: "Bulbs by Sowing Time",
              children: [
                "Flower Bulbs to Sow in All Seasons (10C to 34C)",
                "Winter Sowing Bulbs (10C to 25C)",
                "Summer Sowing Bulbs (24C to 32C)",
                "Rainy Sowing Bulbs (25C to 34C)",
              ],
            },
            { title: "Bulbs by Flower Color" },
            { title: "Bulbs by Name" },
          ],
        },
      ],
    },
    {
      title: "Planters",
      children: [],
    },
    {
      title: "Soil & Fertilizer",
      children: [],
    },
  ];

  return (
    <div className="dropdown">
      {categories.map((mainCategory, mainIndex) => (
        <div key={mainIndex} className="main-category">
          <div
            className="category-title"
            onClick={() => toggleMain(mainIndex)}
          >
            {mainCategory.title}
          </div>
          {openMain === mainIndex && mainCategory.children.length > 0 && (
            <div className="child-categories">
              {mainCategory.children.map((childCategory, childIndex) => (
                <div key={childIndex} className="child-category">
                  <div
                    className="category-title"
                    onClick={() => toggleChild(childIndex)}
                  >
                    {childCategory.title}
                  </div>
                  {openChild === childIndex && childCategory.children && (
                    <div className="sub-child-categories">
                      {childCategory.children.map((subChild, subIndex) => (
                        <div key={subIndex} className="sub-child-category">
                          {subChild}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Dropdown;
