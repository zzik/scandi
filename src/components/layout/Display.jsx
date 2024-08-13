// import { Outlet, useLocation } from "react-router-dom";
import { AddItem } from "../add";
import { List } from '../home'

const Display = () => {
  // let location = useLocation();
  let current = window.location.pathname === "/" ? <List/> : <AddItem/>;
  // let buttons = location.pathname === '/' ? <Delete /> : <Save />
  return (
    <div className="display">
      {current}
      {/* <Outlet /> */}
    </div>
  );
};

export default Display;
