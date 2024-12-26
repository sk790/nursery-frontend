import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './ProductSlider.css';

const products = [
  {
    id: 1,
    title: 'Top 5 Succulents',
    image: '/placeholder.svg?height=200&width=200',
    originalPrice: 1545,
    price: 1099,
    reviews: 68,
    rating: 4,
    savePercentage: 29,
  },
  {
    id: 2,
    title: 'Top 5 Desert Warrior Cacti',
    image: '/placeholder.svg?height=200&width=200',
    originalPrice: 1805,
    price: 1199,
    reviews: 109,
    rating: 4,
    savePercentage: 34,
  },
  {
    id: 3,
    title: 'Dozen Sweet Succulents',
    image: '/placeholder.svg?height=200&width=200',
    originalPrice: 4098,
    price: 2599,
    reviews: 104,
    rating: 4,
    savePercentage: 36,
  },
  // Add more products as needed
];

export default function ProductSlider() {
  const containerRef = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const checkScrollButtons = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setShowLeftButton(scrollLeft > 0);
      setShowRightButton(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    checkScrollButtons();
    window.addEventListener('resize', checkScrollButtons);
    return () => window.removeEventListener('resize', checkScrollButtons);
  }, []);

  const scroll = (direction) => {
    if (containerRef.current) {
      const scrollAmount = 300;
      const newScrollLeft =
        direction === 'left'
          ? containerRef.current.scrollLeft - scrollAmount
          : containerRef.current.scrollLeft + scrollAmount;

      containerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth',
      });
    }
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleScroll = () => {
    checkScrollButtons();
  };

  return (
    <div className="slider-container">
      <h2 className="slider-title">Value For Money - Upto 35% Off</h2>

      <div className="slider-wrapper">
        {showLeftButton && (
          <button
            className="nav-button left"
            onClick={() => scroll('left')}
            aria-label="Scroll left"
          >
            <ChevronLeft />
          </button>
        )}

        <div
          ref={containerRef}
          className="product-container"
          onScroll={handleScroll}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="image-container12">
                <img src={product.image} alt={product.title} />
                <span className="save-tag">Save {product.savePercentage}%</span>
              </div>

              <div className="product-info">
                <div className="price-container">
                  <span className="original-price">₹{product.originalPrice}</span>
                  <span className="price">₹{product.price}</span>
                </div>

                <h3 className="product-title">{product.title}</h3>

                <div className="rating">
                  {[...Array(5)].map((_, index) => (
                    <span
                      key={index}
                      className={`star ${index < product.rating ? 'filled' : ''}`}
                    >
                      ★
                    </span>
                  ))}
                  <span className="reviews">{product.reviews} reviews</span>
                </div>

                <div className="offers">
                  <span className="offers-tag">⚡ 4+ Offers Inside</span>
                </div>

                <button className="add-to-cart">Add to cart</button>
              </div>
            </div>
          ))}
        </div>

        {showRightButton && (
          <button
            className="nav-button12 right"
            onClick={() => scroll('right')}
            aria-label="Scroll right"
          >
            <ChevronRight />
          </button>
        )}
      </div>
    </div>
  );
}
