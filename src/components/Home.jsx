// import React from "react";
import Header from "./Home/Header";
import ResponsiveHeader from "./Home/ResponsiveHeader";
import SortList from "./Home/SortList";

import TopNavbar from "./Home/TopNavbar";

function Home() {
  return (
    <div>
      <TopNavbar />
      <Header />
      <SortList />
      <ResponsiveHeader />
    </div>
  );
}

export default Home;
