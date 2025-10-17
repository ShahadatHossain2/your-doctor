import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

import totalDocIcon from "../../assets/success-doctor.png";
import reviewsIcon from "../../assets/success-review.png";
import patientsIcon from "../../assets/success-patients.png";
import stuffsIcon from "../../assets/success-staffs.png";

const Services = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div
      ref={ref}
      className="grid lg:grid-cols-4 md:grid-cols-2 w-11/12 mx-auto place-items-center gap-6"
    >
      <div className="shadow-sm bg-white flex flex-col justify-center p-10 rounded-2xl w-4/5">
        <img className="w-16" src={totalDocIcon} alt="" />
        {/* <h3 className="text-6xl font-bold">199+</h3> */}
        <h3 className="text-6xl font-bold">
          {inView ? <CountUp end={199} duration={2} /> : 0}+
        </h3>
        <p>Total Doctors</p>
      </div>
      <div className="w-4/5 shadow-sm bg-white  flex flex-col justify-center p-10 rounded-2xl">
        <img className="w-16" src={reviewsIcon} alt="" />
        {/* <h3 className="text-6xl font-bold">467+</h3> */}
        <h3 className="text-6xl font-bold">
          {inView ? <CountUp end={467} duration={2} /> : 0}+
        </h3>
        <p>Total Reviews</p>
      </div>
      <div className="w-4/5 shadow-sm bg-white  flex flex-col justify-center p-10 rounded-2xl">
        <img className="w-16" src={patientsIcon} alt="" />
        {/* <h3 className="text-6xl font-bold">1900+</h3> */}
        <h3 className="text-6xl font-bold">
          {inView ? <CountUp end={1900} duration={2} /> : 0}+
        </h3>
        <p>Patients</p>
      </div>
      <div className="w-4/5 shadow-sm bg-white  flex flex-col justify-center items p-10 rounded-2xl">
        <img className="w-16" src={stuffsIcon} alt="" />
        {/* <h3 className="text-6xl font-bold">300+</h3> */}
        <h3 className="text-6xl font-bold">
          {inView ? <CountUp end={300} duration={2} /> : 0}+
        </h3>
        <p>Total Stuffs</p>
      </div>
    </div>
  );
};

export default Services;

// import React from "react";
// import CountUp from "react-countup";
// import { useInView } from "react-intersection-observer";

// import totalDocIcon from "../../assets/success-doctor.png";
// import reviewsIcon from "../../assets/success-review.png";
// import patientsIcon from "../../assets/success-patients.png";
// import stuffsIcon from "../../assets/success-staffs.png";

// const StatsCard = ({ icon, end, label }) => {
//   const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

//   return (
//     <div
//       ref={ref}
//       className="shadow-sm bg-white flex flex-col justify-center items-center p-10 rounded-2xl w-4/5"
//     >
//       <img className="w-16" src={icon} alt={label} />
//       <h3 className="text-6xl font-bold">
//         {inView ? <CountUp end={end} duration={2} /> : 0}+
//       </h3>
//       <p>{label}</p>
//     </div>
//   );
// };

// const Services = () => {
//   return (
//     <div className="grid lg:grid-cols-4 md:grid-cols-2 w-11/12 mx-auto place-items-center gap-6">
//       <StatsCard icon={totalDocIcon} end={199} label="Total Doctors" />
//       <StatsCard icon={reviewsIcon} end={467} label="Total Reviews" />
//       <StatsCard icon={patientsIcon} end={1900} label="Patients" />
//       <StatsCard icon={stuffsIcon} end={300} label="Total Stuffs" />
//     </div>
//   );
// };

// export default Services;
