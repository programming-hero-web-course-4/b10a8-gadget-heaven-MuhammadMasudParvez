import React from "react";
import Banner from "../Components/Banner";
import { useLoaderData } from "react-router-dom";
import Categories from "../Components/cateogries";

const Home = () => {
  const categories = useLoaderData();
  return (
    <div>
      <Banner />
      <div className="flex  mx-auto w-11/12 gap-6">
        <div className=" w-full bg-blue-500">Products</div>
        <Categories categories={categories} />
      </div>
    </div>
  );
};

export default Home;
