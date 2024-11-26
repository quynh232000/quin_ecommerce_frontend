import { Outlet } from "react-router-dom";
import Header from "../components/shared/headers/Header";
import Footer from "../components/shared/footers/Footer";
import ProfileSidebar from "../components/shared/ProfileSidebar";

function LayoutProfile() {
  return (
    <div className="flex flex-col w-full  min-h-[100vh]">
      <Header />
      <div className="flex-1 w-content m-auto">
        <div className="flex gap-5 py-[40px]">
          <div className="w-20 border rounded-lg shadow-sm h-fit bg-white">
            <ProfileSidebar />
          </div>
          <div className="flex-1 border rounded-lg shadow-sm ">
            <Outlet />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LayoutProfile;
