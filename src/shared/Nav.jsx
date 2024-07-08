import { IoMenu, IoShareSocial } from "react-icons/io5";
import logo from "../assets/Images/wppool-logo.png";

function Nav() {
  return (
    <div className="bg-[#2042B6] ">
      <div className=" flex items-center justify-between h-24 max-w-[1400px] mx-auto">
        <div className="">
          <img src={logo} alt="" />
        </div>
        <div className=" flex items-center gap-4 text-white">
          <button className="border-2 h-10 w-10 rounded-full flex items-center justify-center text-xl">
            <IoShareSocial />
          </button>
          <button className="border-2 rounded-full p-3 px-6">
            Download the 2024 Report
          </button>
          <button className="   text-2xl">
            <IoMenu />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Nav;
