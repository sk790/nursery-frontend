// import React from "react";
// import Header from "./Home/Header";
import AppDownload from "./Home/AppDownload";
import BannerSlider from "./Home/BannerSlider";

// import ProductList from "./Home/ProductList";
import ProductSlider from "./Home/ProductSlider";
import ResponsiveHeader from "./Home/ResponsiveHeader";
import Services from "./Home/Services";
import SortList from "./Home/SortList";

import TopNavbar from "./Home/TopNavbar";

function Home() {
  return (
    <div>
      <TopNavbar />
      <ResponsiveHeader />
      {/* <Header /> */}
      <SortList />
      <BannerSlider />
      <AppDownload/>
      <Services/>
      <ProductSlider/>
      {/* <ProductList/> */}
    </div>
  );
}



export default Home;


