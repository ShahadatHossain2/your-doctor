import React, { useEffect, useState } from "react";
import AppointmentList from "./AppointmentList";
import { useLoaderData } from "react-router";
import { deleteAppointment, getStoredDoctors } from "../../utilities/SaveToDB";
import AppointmentChart from "./AppointmentChart";
import { ToastContainer, toast } from "react-toastify";

const Appointments = () => {
  const doctors = useLoaderData();
  const [storedDoctors, setStoredDoctors] = useState([]);

  useEffect(() => {
    setStoredDoctors(getStoredDoctors("appointment"));
  }, []);

  const handleCancelAppointment = (id) => {
    deleteAppointment(id, "appointment");
    setStoredDoctors((prev) => prev.filter((doctorId) => doctorId !== id));
    toast.warning("Your Appointment Has Been Canceled!", {
      position: "top-center",
      autoClose: 2000,
      theme: "colored",
      style: { background: "red", color: "white" },
    });
  };
  const appointedDoctors = doctors.filter((doctor) =>
    storedDoctors.includes(doctor.id)
  );

  return (
    <div>
      <div className="w-11/12 mx-auto">
        <AppointmentChart
          appointedDoctors={appointedDoctors}
        ></AppointmentChart>
      </div>
      <div className="w-11/12 mx-auto">
        <div className="text-center mt-8 mb-6">
          <h3 className="text-[40px] font-bold">My Today's Appointments</h3>
          <p className="text-gray-400 text-[16px]">
            Our platform connects you with verified, experienced doctors across
            various specialties — all at your convenience.
          </p>
        </div>
        {appointedDoctors.map((doctor) => (
          <AppointmentList
            key={doctor.id}
            doctor={doctor}
            handleCancelAppointment={handleCancelAppointment}
          ></AppointmentList>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Appointments;
