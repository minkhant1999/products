import React from "react";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/12 bg-green-600 h-full"></div>

      <div className="w-11/12 flex flex-col">
        {/* Dynamic Content */}
        <div className="flex-grow  bg-gray-100">
          {/* Navbar */}
          <div className="h-[60px] bg-gray-400 "></div>
          <Outlet /> {/* Nested routes render here */}
        </div>
      </div>
    </div>
  );
};

export default Home;
