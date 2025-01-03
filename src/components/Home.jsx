// import React from "react";
// import Header from "./Home/Header";
import AppDownload from "./Home/AppDownload";
import BannerGrid from "./Home/BannerGrid";
import BannerSlider from "./Home/BannerSlider";
import BlogSection from "./Home/BlogSection";
// import Dropdown from "./Home/Dropdown";
import Garden from "./Home/Garden";

// import GardeningSidebar from "./Home/GardeningSidebar";

import ProductSlider from "./Home/ProductSlider";
import PromotionalGrid from "./Home/PromotionalGrid";
import ResponsiveHeader from "./Home/ResponsiveHeader";
import Services from "./Home/Services";
import SortList from "./Home/SortList";

import TopNavbar from "./Home/TopNavbar";
import TrendingSection from "./Home/TrendingSection";

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
      <BannerGrid/>
      <PromotionalGrid/>
      <TrendingSection/>
      <Garden/>
      <BlogSection/>
      {/* <Dropdown/> */}
      {/* <GardeningSidebar/> */}
    </div>
  );
}
export default Home;


