import { Outlet } from "react-router-dom";
import "./DashboardLayout.css"
function DashboardLayout() {
  return (
    <div className="MF-dashboardContainer">
      <Outlet />
    </div>
  );
}

export default DashboardLayout;
