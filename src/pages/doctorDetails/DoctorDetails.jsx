import { CircleAlert } from "lucide-react";
import React, { use } from "react";
import { useParams } from "react-router";

const DoctorDetails = ({ doctorsPromise }) => {
  const doctors = use(doctorsPromise);
  const doctorId = parseInt(useParams().id);
  const doctor = doctors.find((dr) => dr.id === doctorId);
  const {
    name,
    degree,
    designation,
    available_days,
    fee,
    hospital_name,
    image,
    reg_no,
    exp,
    id,
  } = doctor;

  const today = new Date();
  const dayName = today.toLocaleDateString("en-US", { weekday: "long" });

  return (
    <div className="w-14/16 mx-auto">
      <div className="text-center  bg-white rounded-2xl my-4 p-10">
        <h3 className="text-[32px] font-bold">Doctor’s Profile Details</h3>
        <p className="px-20">
          Lorem ipsum dolor sit amet consectetur. Sit enim blandit orci tortor
          amet ut. Suscipit sed est fermentum magna. Quis vitae tempus facilisis
          turpis imperdiet mattis donec dignissim volutpat.
        </p>
      </div>
      <div className="bg-white my-8 p-6 rounded-2xl flex gap-4">
        <div className="w-1/3">
          <img className="rounded-2xl h-full" src={image} alt="" />
        </div>
        <div className="w-2/3">
          <h3 className="text-[32px] font-bold">{name}</h3>
          <p className="text-gray-400">{degree}</p>
          <p className="text-gray-400">{designation}</p>
          <p className="text-gray-400">Working at</p>
          <h3 className="text-[20px] font-bold mb-3">{hospital_name}</h3>
          <p className="text-gray-400">® {reg_no}</p>
          <hr className="border-t-2 border-gray-400 border-dotted my-2" />
          <div className="flex my-2">
            <h4 className="font-bold">Availability</h4>
            <p>
              {available_days.map((day, idx) => (
                <span
                  className="bg-orange-200 mx-1 text-orange-400 px-2 py-1 rounded-2xl"
                  key={idx}
                >
                  {day}
                </span>
              ))}
            </p>
          </div>
          <div className="flex gap-2">
            <h4 className="font-bold">Consultation Fee:</h4>
            <span className="text-blue-600">
              Taka: {fee} <span className="text-gray-400">(incl. Vat)</span> Per
              consultation
            </span>
          </div>
        </div>
      </div>
      <div className="bg-white p-4 rounded-2xl">
        <h3 className="text-2xl font-bold text-center">Book an Appointment</h3>
        <hr className="border-t-2 border-gray-400 border-dotted my-2" />

        <div>
          <div className="flex justify-between p-2">
            <h3 className="font-bold">Availability</h3>
            <p
              className={`bg-gray-100 p-2 rounded-3xl ${
                available_days.includes(dayName)
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {available_days.includes(dayName) ? "Available" : "Not Available"}
            </p>
          </div>
          <p className="flex gap-1 text-[16px] bg-orange-200 mx-1 text-orange-400 p-2 rounded-2xl">
            <CircleAlert></CircleAlert>
            Due to high patient volume, we are currently accepting appointments
            for today only. We appreciate your understanding and cooperation.
          </p>
          <div className="my-4 w-11/12 mx-auto">
            <button className="btn btn-info text-white rounded-2xl w-full">
              Book Appointment Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
