import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/footer";

const MainLayout = () => {
  return (
    <div className="font-montserrat">
      <Navbar />
      <div className="mb-10">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
