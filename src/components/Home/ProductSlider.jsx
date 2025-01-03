import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./ProductSlider.css";

const products = [
  {
    id: 1,
    title: "Top 5 Succulents",
    image: "../../../public/Images/p1.jpg",
    alternateImage: "../../../public/Images/p2.jpg",
    originalPrice: 1545,
    price: 1099,
    reviews: 68,
    rating: 4,
    savePercentage: 29,
    offers: "⚡ 4+ Offers Inside",
  },
  {
    id: 2,
    title: "Top 5 Desert Warrior Cacti",
    image: "../../../public/Images/p2.jpg",
    alternateImage: "../../../public/Images/p1.jpg",
    originalPrice: 1805,
    price: 1199,
    reviews: 109,
    rating: 4,
    savePercentage: 34,
    offers: "⚡ 4+ Offers Inside",
  },
  {
    id: 3,
    title: "Dozen Sweet Succulents",
    image: "../../../public/Images/p3.jpg",
    originalPrice: 4098,
    price: 2599,
    reviews: 104,
    rating: 4,
    savePercentage: 36,
    offers: "⚡ 4+ Offers Inside",
  },
  {
    id: 4,
    title: "Dozen Sweet Succulents",
    image: "../../../public/Images/p4.jpg",
    originalPrice: 4098,
    price: 2599,
    reviews: 104,
    rating: 4,
    savePercentage: 36,
    offers: "⚡ 4+ Offers Inside",
  },
  {
    id: 5,
    title: "Dozen Sweet Succulents",
    image: "../../../public/Images/p5.jpg",
    originalPrice: 4098,
    price: 2599,
    reviews: 104,
    rating: 4,
    savePercentage: 36,
    offers: "⚡ 4+ Offers Inside",
  },
  {
    id: 6,
    title: "Dozen Sweet Succulents",
    image: "../../../public/Images/p6.jpg",
    originalPrice: 4098,
    price: 2599,
    reviews: 104,
    rating: 4,
    savePercentage: 34,
    offers: "⚡ 4+ Offers Inside",
  },
  {
    id: 7,
    title: "Dozen Sweet Succulents",
    image: "../../../public/Images/p7.jpg",
    originalPrice: 4098,
    price: 2599,
    reviews: 104,
    rating: 4,
    savePercentage: 37,
    offers: "⚡ 4+ Offers Inside",
  },
  {
    id: 8,
    title: "Dozen Sweet Succulents",
    image: "../../../public/Images/p8.jpg",
    originalPrice: 4098,
    price: 2599,
    reviews: 104,
    rating: 4,
    savePercentage: 46,
    offers: "⚡ 4+ Offers Inside",
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
    window.addEventListener("resize", checkScrollButtons);
    return () => window.removeEventListener("resize", checkScrollButtons);
  }, []);

  const scroll = (direction) => {
    if (containerRef.current) {
      const scrollAmount = 300;
      const newScrollLeft =
        direction === "left"
          ? containerRef.current.scrollLeft - scrollAmount
          : containerRef.current.scrollLeft + scrollAmount;

      containerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
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
            className="nav-button12 left"
            onClick={() => scroll("left")}
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
                {/* show altranet img on hover */}
                {/* <img src={product.image} alt={product.title} /> */}
                <div className="productitem--image-container">
                  <img
                    src={product.image}
                    alt={product.title}
                    // {product.alternateImage}={product.image}
                    
                    // className="productitem--image-primary"
                    onMouseEnter={(e) =>
                      (e.currentTarget.src = product.alternateImage)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.src = product.image)
                    }
                  />
                  {/* <img
                    src={product.alternateImage}
                    alt={product.title}
                    className="productitem--image-alternate"
                  /> */}
                </div>
                <span className="save-tag">Save {product.savePercentage}%</span>
              </div>

              <div className="product-info">
                <div className="price-container">
                  <span className="original-price">
                    ₹{product.originalPrice}
                  </span>
                  <span className="price">₹{product.price}</span>
                </div>

                <h3 className="product-title">{product.title}</h3>

                <div className="rating">
                  {[...Array(5)].map((_, index) => (
                    <span
                      key={index}
                      className={`star ${
                        index < product.rating ? "filled" : ""
                      }`}
                    >
                      ★
                    </span>
                  ))}
                  <span className="reviews">{product.reviews} reviews</span>
                </div>

                <div className="offers">
                  <span className="offers-tag">{product.offers}</span>
                </div>

                <button className="add-to-cart">Add to cart</button>
              </div>
            </div>
          ))}
        </div>

        {showRightButton && (
          <button
            className="nav-button12 right"
            onClick={() => scroll("right")}
            aria-label="Scroll right"
          >
            <ChevronRight />
          </button>
        )}
      </div>
    </div>
  );
}
