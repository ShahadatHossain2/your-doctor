import React from "react";
import { NavLink } from "react-router";
import logo from "../../assets/logo.png";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
// import "../header/Header.css";

const Footer = () => {
  return (
    <div className="mt-10 bg-white p-10">
      <div className="flex justify-center items-center gap-2">
        <img src={logo} alt="" />
        <h3 className="text-3xl font-bold">Your Doctor</h3>
      </div>
      <ul className="flex justify-center gap-5 mt-4">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/">My-Booking</NavLink>
        </li>
        <li>
          <NavLink to="/">Blogs</NavLink>
        </li>
        <li>
          <NavLink to="/">Contact Us</NavLink>
        </li>
      </ul>
      <div className="flex justify-center gap-4 my-4">
        <Facebook className="text-white bg-blue-800 rounded"></Facebook>
        <Instagram className="bg-red-400 text-white rounded"></Instagram>
        <Youtube className="bg-red-600 text-white rounded"></Youtube>
        <Linkedin className="bg-blue-600 text-white rounded"></Linkedin>
      </div>
    </div>
  );
};

export default Footer;
