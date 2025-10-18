import React from "react";
import Header from "../../components/header/Header";
import { Outlet, useNavigation } from "react-router";
import Footer from "../../components/footer/Footer";

const Root = () => {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);
  return (
    <div>
      <Header></Header>
      {isNavigating && <progress className="progress w-56"></progress>}
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
