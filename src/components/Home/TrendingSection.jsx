// import React from 'react';
import './TrendingSection.css'; // Import the CSS file

const TrendingSection = () => {
  const trendingItems = [
    {
      imgSrc: 'Images/treanding1.png',
      title: 'Bonsai Plants - Upto 25% Off',
    },
    {
      imgSrc: 'Images/treanding2.png',
      title: 'Ceramic Planters - Starting ₹299',
    },
    {
      imgSrc: 'Images/treanding3.png',
      title: 'Kokedama - Starting ₹249',
    },
    {
      imgSrc: 'Images/treanding4.png',
      title: 'Month Wise Gardening - Upto 65% Off',
    },
  ];

  return (
    <section className="trending-section">
      <h2 className="trending-title">Trending</h2>
      <div className="trending-grid">
        {trendingItems.map((item, index) => (
          <div key={index} className="trending-item">
            <div className="image-wrapper">
              <img src={item.imgSrc} alt={item.title} />
            </div>
            <p className="item-title">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingSection;
