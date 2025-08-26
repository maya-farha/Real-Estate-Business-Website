import { Outlet } from "react-router-dom";
function DashboardLayout() {
  return (
    <div className="MF-dashboardContainer">
      <Outlet />
    </div>
  );
}

export default DashboardLayout;
