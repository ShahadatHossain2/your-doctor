import React from "react";
import banner1 from "../../assets/banner-img-1.png";
import banner2 from "../../assets/banner-2.png";

const Banner = () => {
  return (
    <div className="w-11/12 mx-auto shadow-sm my-4 bg-white rounded-xl">
      <div className="w-5/6 mx-auto py-6">
        <div className="my-4">
          <div className="text-center">
            <h3 className="text-5xl font-bold my-2">
              Dependable Care, Backed by Trusted Professionals.
            </h3>
            <p className="text-lg p-2">
              Our platform connects you with verified, experienced doctors
              across various specialties — all at your convenience. Whether it's
              a routine checkup or urgent consultation, book appointments in
              minutes and receive quality care you can trust.
            </p>
          </div>
          <div className="text-center">
            <input
              className="border rounded-2xl p-[6px] mr-2 w-1/2 text-center"
              type="search"
              name=""
              placeholder="Search"
            />
            <button className="btn btn-info text-white rounded-3xl">
              Search Now
            </button>
          </div>
        </div>
        <div className="md:flex gap-2">
          <img className="md:w-1/2 rounded-2xl my-2" src={banner1} alt="" />
          <img className="md:w-1/2 rounded-2xl my-2" src={banner2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
