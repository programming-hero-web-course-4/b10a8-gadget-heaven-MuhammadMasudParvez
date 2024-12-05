import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";
import "../App.css";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-361px)] mx-auto ">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
