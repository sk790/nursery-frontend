// import React from "react";
import "./BannerGrid.css"; // CSS file for styling

// const banners = [
//   {
//     id: 1,
//     title: "A Living Gift - Upto 30% Off",
//     description: "Express true emotions with a gift that grows forever.",
//     image: "../../../public/Images/section1.jpg",
//     buttonText: "Shop Now",
//   },
//   {
//     id: 2,
//     title: "Miniature Garden - Upto 30% Off",
//     description: "Enjoy a living garden even in small spaces.",
//     image: "../../../public/Images/section2.jpg",
//     buttonText: "Shop Now",
//   },
//   {
//     id: 3,
//     title: "Microgreen Seeds - 50% Off",
//     description:
//       "Grow your own food full of nutrients, flavour, and freshness.",
//     image: "../../../public/Images/section3.jpg",
//     buttonText: "Shop Now",
//   },
//   {
//     id: 4,
//     title: "Organic Seeds - 50% Off",
//     description:
//       "Best quality seeds for organic lovers. No chemicals. No preservatives.",
//     image: "../../../public/Images/section4.jpg",
//     buttonText: "Shop Now",
//   },
//   {
//     id: 5,
//     title: "Event Gifts - Starting ₹119",
//     description: "Corporate, Marriages, Conferences, Parties? You're covered.",
//     image: "../../../public/Images/section5.jpg",
//     buttonText: "Shop Now",
//   },
// ];

const BannerGrid = () => {
  return (
    <section className="banner-grid">
      <div className="banner-title">Popular</div>
      <div className="banner-section">
        <div className="left-section">
          <div className="banner-left">
            <img src="../../../public/Images/section1.jpg" alt="" />
            <div className="banner-text">
              <div className="tital-image">A Living Gift - Upto 30% Off</div>
              <div className="discription-image">
                Express true emotions with a gift that grows forever.
              </div>
              <button className="button-shop">Shop Now</button>
            </div>
          </div>
          <div className="banner-left">
            <img src="../../../public/Images/section2.jpg" alt="" />
            <div className="banner-text">
              <div className="tital-image">Miniature Garden - Upto 30% Off</div>
              <div className="discription-image">
                Enjoy a living garden even in small spaces.
              </div>
              <button className="button-shop">Shop Now</button>
            </div>
          </div>
        </div>
        <div className="right-section">
          <div className="banner-right">
            <img src="../../../public/Images/section3.jpg" alt="" />
            <div className="banner-text">
              <div className="tital-image">Microgreen Seeds - 50% Off</div>
              <div className="discription-image">
                Grow your own food full of nutrients, flavour, and freshness.
              </div>
              <button className="button-shop">Shop Now</button>
            </div>
          </div>
          <div className="banner-right">
            <img src="../../../public/Images/section4.jpg" alt="" />
            <div className="banner-text">
              <div className="tital-image">Organic Seeds - 50% Off</div>
              <div className="discription-image">
                Best quality seeds for organic lovers. No chemicals. No
                preservatives.
              </div>
              <button className="button-shop">Shop Now</button>
            </div>
          </div>
          <div className="banner-right">
            <img src="../../../public/Images/section5.jpg" alt="" />
            <div className="banner-text">
              <div className="tital-image">Event Gifts - Starting ₹119</div>
              <div className="discription-image">
                Corporate, Marriages, Conferences, Parties? You&apos;re covered.
              </div>
              <button className="button-shop">Shop Now</button>
            </div>
          </div>
        </div>
      </div>
      {/* <article
        className="promo-block promo-block--image promo-block--template--16940560121996__dynamic_promo_mosaic--promotion-1 promo-block--index-1 promo-block-- promo-mosaic--maintain-aspect-ratio  "
        data-rimg="lazy"
        data-rimg-scale="1"
        data-rimg-template="//nurserylive.com/cdn/shop/files/nurserylive-home-page-gift_223a0267-5e95-413f-9c5a-52dafe5b34ef_{size}.jpg?v=1633892191"
        data-rimg-max="1140x737"
        data-rimg-crop="false"
      >
        <noscript data-rimg-noscript>
          <img
            src="../../../public/Images/section1.jpg"
            alt=""
            data-rimg="noscript"
            srcSet="//nurserylive.com/cdn/shop/files/nurserylive-home-page-gift_223a0267-5e95-413f-9c5a-52dafe5b34ef_1140x737.jpg?v=1633892191 1x"
            className="promo-block--background"
          ></img>
        </noscript>

        <img
          src="../../../public/Images/section1.jpg"
          alt=""
          data-rimg="lazy"
          data-rimg-scale="1"
          data-rimg-template="//nurserylive.com/cdn/shop/files/nurserylive-home-page-gift_223a0267-5e95-413f-9c5a-52dafe5b34ef_{size}.jpg?v=1633892191"
          data-rimg-max="1140x737"
          data-rimg-crop="false"
          srcSet="data:image/svg+xml;utf8,<svg%20xmlns='http://www.w3.org/2000/svg'%20width='1140'%20height='737'></svg>"
          className="promo-block--background"
        ></img>

        <div data-rimg-canvas></div>

        <a
          className="promo-block--content  promo-block--content-align-top-left    promo-block--expanded  "
          href="collections/gifts.html"
          data-promo-block-content
        >
          <div className="promo-block--content-wrapper">
            <h2 className="promo-block--header">
              A Living Gift - Upto 30% Off
            </h2>

            <p className="promo-block--text">
              Express true emotions with a gift that grows forever.
            </p>

            <span className="button-primary promo-block--button">Shop Now</span>
          </div>
        </a>
      </article> */}
    </section>
  );
};

export default BannerGrid;
