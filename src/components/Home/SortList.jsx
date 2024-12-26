// // import React from 'react';
// import img1 from '../../../public/Images/offer.png'
// const logoListData = [
  
//   {
//     href: "pages/offers.html",
//     imgSrc: img1,
//     imgSrcSet: "",
//     template: "",
//     max: "220x250",
//   },
//   {
//     href: "pages/offers.html",
//     imgSrc: "https://nurserylive.com/cdn/shop/files/nurserylive-offers-menu_119x135.png?v=1652634796",
//     imgSrcSet: "",
//     template: "",
//     max: "220x250",
//   },
//   {
//     href: "pages/offers.html",
//     imgSrc: "https://nurserylive.com/cdn/shop/files/nurserylive-offers-menu_119x135.png?v=1652634796",
//     imgSrcSet: "",
//     template: "",
//     max: "220x250",
//   },
//   {
//     href: "pages/offers.html",
//     imgSrc: "https://nurserylive.com/cdn/shop/files/nurserylive-offers-menu_119x135.png?v=1652634796",
//     imgSrcSet: "",
//     template: "",
//     max: "220x250",
//   },
//   // Add more items as needed following the same structure
// ];

// const SortList = () => {
//   return (
//     <div>
//       <img src='https://nurserylive.com/cdn/shop/files/nurserylive-offers-menu_119x135.png?v=1652634796'></img>
//       <section className="logolist--container">
//         <div className="home-section--content logolist--inner">
//           {logoListData.map((item, index) => (
//             <div className="logolist--item." key={index}>
//               <a className="logolist--link" href={item.href} target="_blank" rel="noopener noreferrer">
//                 <noscript data-rimg-noscript>
//                   <img
//                     src={item.imgSrc}
//                     alt=""
//                     data-rimg="noscript"
//                     srcSet={item.imgSrcSet}
//                     className="logolist--image"
//                   />
//                 </noscript>
//                 <img
//                   src={item.imgSrc}
//                   alt=""
//                   data-rimg="lazy"
//                   data-rimg-scale="1"
//                   data-rimg-template={item.template}
//                   data-rimg-max={item.max}
//                   data-rimg-crop="false"
//                   srcSet="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='141' height='160'></svg>"
//                   className="logolist--image"
//                 />
//                 <div data-rimg-canvas></div>
//               </a>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default SortList;
// import React from "react";
// import "./SortList.css";

const sortOptions = [
  { name: "OFFERS", img: "../../../public/Images/offer.png" },
  { name: "GARDENING", img: "../../../public/Images/GARDENING.png" },
  { name: "PLANTS", img: "../../../public/Images/PLANTS.png" },
  { name: "SEEDS", img: "../../../public/Images/SEEDS.png" },
  { name: "BULBS", img: "../../../public/Images/BULBS.png" },
  { name: "POTS", img: "../../../public/Images/POTS.png" },
  { name: "FERTILIZERS", img: "../../../public/Images/FERTILIZERS.png" },
  { name: "CORPORATE", img: "../../../public/Images/CORPORATE.png" },
  { name: "PEBBLES", img: "../../../public/Images/PEBBLES.png" },
  { name: "ACCESSORIES", img: "../../../public/Images/ACCESSORIES.png" },
];

const SortList = () => {
  return (
    <div className="sortlist-container">
      {sortOptions.map((option, index) => (
        <div key={index} className="sortlist-item">
          <img src={option.img} alt={option.name} className="sortlist-image" />
          {/* <p className="sortlist-name">{option.name}</p> */}
        </div>
      ))}
    </div>
  );
};

export default SortList;
