import { Outlet } from "react-router-dom";

const Display = () => {
  return (
    <div className="display">
      <Outlet />
    </div>
  );
};

export default Display;
