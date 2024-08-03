import { useLocation } from "react-router-dom";
import { Delete, Save } from "../buttons";

const Header = () => {
  let location = useLocation();
  let heading = location.pathname === "/" ? "Product List" : "Product Add";
  let buttons = location.pathname === '/' ? <Delete /> : <Save />
  
  return (
    <div className="header">
      <h2 className="title">{heading}</h2>
      <div className="buttons">{buttons}</div>
    </div>
  );
};

export default Header;
