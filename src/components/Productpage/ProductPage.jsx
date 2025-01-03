import  { useState } from "react";
import "./ProductPage.css";

const ProductPage = () => {
  const product = {
    title: "5 Fortune Teller Cactus Plants Pack",
    reviews: 117,
    originalPrice: 1970,
    discountedPrice: 1659,   
    discount: 16,
    details: [
      "Shipping ₹79 for entire order",
      "Dispatch in 7 days",
      "Country of origin: India",
    ],
    offers: [
      "Get ₹249 Air Purifier Money Plant Free (On orders above ₹599)",
      "Get ₹275 Vegetable garden pack (On orders above ₹599)",
      "Get Pack of 2 Plant Growth Booster Free (On all orders)",
      "Earn 200% nCash (On all orders placed today)",
    ],
    note: "* check details on cart page",
    images: [
      "Images/p1.jpg", // Main image path
      "Images/p2.jpg", // Thumbnail 1
      "Images/p3.jpg", // Thumbnail 2
    ],
  };

  // State for main image
  const [mainImage, setMainImage] = useState(product.images[0]);

  return (
    <div className="product-page">
      {/* Image Section */}
      <div className="product-images">
        <img src={mainImage} alt={product.title} className="main-image" />
        <div className="thumbnail-images">
          {product.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => setMainImage(image)} // Update main image on click
              className={mainImage === image ? "active-thumbnail" : ""}
            />
          ))}
        </div>
      </div>

      {/* Product Details Section */}
      <div className="product-details">
        <h1>{product.title}</h1>
        <p className="reviews">{product.reviews} reviews</p>
        <div className="pricing">
          <span className="discount">{`Save ${product.discount}%`}</span>
          <span className="original-price">₹{product.originalPrice}</span>
          <span className="discounted-price">₹{product.discountedPrice}</span>
        </div>
        <ul className="product-info">
          {product.details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
        <div className="quantity">
          <label htmlFor="quantity">Quantity</label>
          <input type="number" id="quantity" defaultValue={1} />
        </div>
        <button className="add-to-cart">Add to cart</button>
        <div className="offers">
          <h3>Today&apos;s Offer</h3>
          <ul>
            {product.offers.map((offer, index) => (
              <li key={index}>{offer}</li>
            ))}
          </ul>
        </div>
        <p className="note">{product.note}</p>
      </div>
    </div>
  );
};

export default ProductPage;
