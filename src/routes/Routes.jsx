import { createBrowserRouter } from "react-router";
import Root from "../pages/root/Root";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Home from "../pages/home/Home";
import DoctorDetails from "../pages/doctorDetails/doctorDetails";
import { Suspense } from "react";
import Appointments from "../pages/appointments/Appointments";

const doctorsPromise = fetch("doctorsData.json").then((res) => res.json());

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        loader: async () => {
          const res = await fetch("/doctorsData.json");
          const data = await res.json();
          return data;
        },
        Component: Home,
      },
      {
        path: "/doctorDetails/:id",
        element: (
          <Suspense fallback={<progress className="progress w-56"></progress>}>
            <DoctorDetails doctorsPromise={doctorsPromise}></DoctorDetails>
          </Suspense>
        ),
      },
      {
        path: "/appointments",
        loader: async () => {
          const res = await fetch("/doctorsData.json");
          const data = await res.json();
          return data;
        },
        Component: Appointments,
      },
    ],
  },
]);
