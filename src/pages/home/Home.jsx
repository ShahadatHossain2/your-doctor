import React, { useState } from "react";
import { useLoaderData } from "react-router";
import Banner from "./Banner";
import Doctors from "../../components/doctors/Doctors";
import Services from "./Services";

const Home = () => {
  const doctorsData = useLoaderData();
  const [showData, setShowData] = useState(6);
  const [change, setChange] = useState(false);
  const handleViewAll = () => {
    if (showData === 6) {
      setShowData(doctorsData.length);
    } else {
      setShowData(6);
    }
    setChange(!change);
  };
  console.log(doctorsData);
  return (
    <div>
      <Banner></Banner>
      <div className="w-10/12 mx-auto">
        <div className="my-4 w-3/4 mx-auto text-center">
          <h3 className="text-[40px] font-bold">Our Best Doctors</h3>
          <p className="text-[16px]">
            Our platform connects you with verified, experienced doctors across
            various specialties — all at your convenience. Whether it's a
            routine checkup or urgent consultation, book appointments in minutes
            and receive quality care you can trust.
          </p>
        </div>
        <div className="lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 gap-2">
          {doctorsData.slice(0, showData).map((doctor) => (
            <Doctors key={doctor.id} doctor={doctor}></Doctors>
          ))}
        </div>
        <div className="text-center my-6">
          <button onClick={handleViewAll} className="btn btn-soft btn-info">
            View {change ? "Less" : "All Doctors"}
          </button>
        </div>
      </div>
      <Services></Services>
    </div>
  );
};

export default Home;
