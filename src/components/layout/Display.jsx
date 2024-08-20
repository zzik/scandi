import { Outlet, useLocation } from "react-router-dom";
import { AddItem } from "../add";
import { List } from "../home";
import { useEffect } from "react";

const Display = () => {
  let location = useLocation();
  // let current = location.pathname === "/" ? <List /> : <AddItem />;
  useEffect(() => {
    document.title = location.pathname === "/" ? "Product List" : "Product Add"
  }, [location.pathname]);
  return (
    <div className="display">
      {/* {current} */}
      <Outlet />
    </div>
  );
};

export default Display;
