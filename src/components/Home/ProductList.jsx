import './ProductSlider.css';
const products = [
  {
    id: 1,
    name: "Grow flowers through seeds - Kids learning garden pack",
    imagePrimary:
      "cdn/shop/products/nurserylive-garden-kits-grow-flowers-through-seeds-kids-learning-garden-pack-16968908570764_512x512d978.jpg?v=1634220851",
    imageAlternate:
      "cdn/shop/products/nurserylive-garden-kits-grow-flowers-through-seeds-kids-learning-garden-pack-16968908603532_512x5122e86.jpg?v=1634220848",
    price: "₹ 759",
    description:
      "This pack contains 3 flowering plant seeds + 3 pots + 5kg ready to use soil. Increases learning skills in kids.",
    offers: "⚡ 4+ Offers Inside",
    reviews: { rating: 3.98, count: 59 },
  },
  {
    id: 2,
    name: "Grow flowers through seeds - Kids learning garden pack",
    imagePrimary:
      "cdn/shop/products/nurserylive-garden-kits-grow-flowers-through-seeds-kids-learning-garden-pack-16968908570764_512x512d978.jpg?v=1634220851",
    imageAlternate:
      "cdn/shop/products/nurserylive-garden-kits-grow-flowers-through-seeds-kids-learning-garden-pack-16968908603532_512x5122e86.jpg?v=1634220848",
    price: "₹ 759",
    description:
      "This pack contains 3 flowering plant seeds + 3 pots + 5kg ready to use soil. Increases learning skills in kids.",
    offers: "⚡ 4+ Offers Inside",
    reviews: { rating: 3.98, count: 59 },
  },
  // Add more product objects as needed
];

const ProductList = () => {
  return (
    <ul className="productgrid home-section--content featured-collection__content">
      {products.map((product) => (
        <li
          key={product.id}
          className="productgrid--item imagestyle--natural productitem--emphasis show-actions--mobile"
          data-product-item
        >
          <div className="productitem" data-product-item-content>
            <a
              className="productitem--image-link"
              href={`/products/${product.name.replace(/\s+/g, '-').toLowerCase()}`}
            >
              <figure className="productitem--image" data-product-item-image>
                <img
                  src={product.imagePrimary}
                  alt={product.name}
                  className="productitem--image-primary"
                />
                <img
                  src={product.imageAlternate}
                  alt={product.name}
                  className="productitem--image-alternate"
                />
              </figure>
            </a>
            <div className="productitem--info">
              <div className="price productitem__price">
                <div className="price__current price__current--emphasize">
                  <span className="money">{product.price}</span>
                </div>
              </div>
              <h2 className="productitem--title">
                <a href={`/products/${product.name.replace(/\s+/g, '-').toLowerCase()}`}>
                  {product.name}
                </a>
              </h2>
              <div className="productitem--description">
                <p>{product.description}</p>
                <a
                  href={`/products/${product.name.replace(/\s+/g, '-').toLowerCase()}`}
                  className="productitem--link"
                >
                  View full details
                </a>
              </div>
              <div className="productitem--vendor">{product.offers}</div>
              <div className="productitem--reviews">
                <span>
                  ⭐ {product.reviews.rating} ({product.reviews.count} reviews)
                </span>
              </div>
              <button
                className="productitem--action-trigger button-primary"
                type="button"
                aria-label={`Add ${product.name} to cart`}
              >
                Add to cart
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
