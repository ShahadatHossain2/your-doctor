import React from "react";
import { useNavigate } from "react-router";

const Doctors = ({ doctor }) => {
  const { name, degree, available_days, image, reg_no, exp, id } = doctor;

  const today = new Date();
  const dayName = today.toLocaleDateString("en-US", { weekday: "long" });

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/doctorDetails/${id}`);
  };

  return (
    <div>
      <div className="w-full h-full mx-auto card bg-base-100 shadow-sm my-2 p-8">
        <figure>
          <img src={image} alt="Doctor" className="rounded-xl h-60 w-80" />
        </figure>
        <div className="flex gap-3 mt-2 text-[14px]">
          <p
            className={`bg-gray-100 p-2 rounded-3xl ${
              available_days.includes(dayName)
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            {available_days.includes(dayName) ? "Available" : "Not Available"}
          </p>
          <p className="bg-gray-100 p-2 rounded-3xl text-blue-500">
            {exp} Years Experience
          </p>
        </div>
        <div className="w-full h-35">
          <h3 className="font-bold text-2xl my-2">{name}</h3>
          <p className="text-gray-500">{degree}</p>
          <hr className="border-t-2 border-gray-400 border-dotted my-2" />
          <p className="text-gray-500">® {reg_no}</p>
        </div>
        <div>
          <button
            onClick={handleNavigate}
            className="btn rounded-3xl w-full border-blue-500 text-blue-600 mt-2"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
