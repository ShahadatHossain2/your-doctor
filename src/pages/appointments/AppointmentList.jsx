import React from "react";

const AppointmentList = ({ doctor, handleCancelAppointment }) => {
  const { name, degree, fee, id } = doctor;

  return (
    <div className="bg-white p-6 rounded-2xl my-4">
      <div className="flex justify-between my-4">
        <div>
          <h3 className="text-[20px] font-bold">{name}</h3>
          <p className="text-gray-400">{degree}</p>
        </div>
        <div>
          <p className="text-gray-400">Appointment Fee: {fee} Taka + Vat</p>
        </div>
      </div>
      <hr className="border-t-2 border-gray-400 border-dotted my-2" />

      <div>
        <button
          onClick={() => handleCancelAppointment(id)}
          className="border border-red-500 my-2 rounded-2xl py-2 w-full font-bold text-red-500 cursor-pointer"
        >
          Cancel Appointment
        </button>
      </div>
    </div>
  );
};

export default AppointmentList;
