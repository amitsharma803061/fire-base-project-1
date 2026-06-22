import { Outlet } from "react-router";
// import AboutUs from "../Pages/AboutUs";
import Navbar from "../Components/Navbar";
// import Home from "../Pages/HomePage";

const MainLayouts = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayouts;
