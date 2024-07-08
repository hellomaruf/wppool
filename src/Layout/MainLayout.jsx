import { Outlet } from "react-router-dom";
import Nav from "../shared/Nav";

function MainLayout() {
  return (
    <div>
      <Nav/>
      <Outlet />
      <div className="">footer</div>
    </div>
  );
}

export default MainLayout;
