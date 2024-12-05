import React from "react";
import banner from "../assets/banner.jpg";

const Banner = () => {
  return (
    <div>
      <div className="border p-3 w-11/12  mx-auto rounded-2xl ">
        <div className=" bg-[#9538E2] h-[694px] rounded-2xl">
          <div className="hero-content text-center mx-auto pt-20">
            <div className="">
              <h1 className="text-5xl text-white font-bold w-5/6 mx-auto">
                Upgrade Your Tech Accessorize with Gadget Heaven Accessories
              </h1>
              <p className="py-6 text-white">
                Explore the latest gadgets that will take your experience to the
                next level. From smart devices to the coolest accessories, we
                have it all!
              </p>
              <button className="btn px-8 rounded-3xl bg-white text-[#9538E2] font-bold ">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="mx-auto flex  ">
        <div className="flex mx-auto border p-3 rounded-2xl">
          <div className="bg-banner object-cover  rounded-2xl mx-auto bg-cover w-[1062px] h-[563px]  flex">
            <img src="../assets/banner.jpg" alt="" />
          </div>
        </div>
      </div> */}
      <div className="-mt-[345px] bg-cover w-[1062px] h-[563px] mx-auto border border-white p-5 rounded-2xl">
        <img
          src={banner}
          className="rounded-2xl w-full h-full object-cover"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
