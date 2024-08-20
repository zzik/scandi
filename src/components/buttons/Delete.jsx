import { NavLink } from "react-router-dom";
import { massDelete } from "../../utils";

const Delete = () => <>
      <NavLink to={"add-product"}>ADD</NavLink>
      <button onClick={() => massDelete()}>MASS DELETE</button>
    </>


export default Delete;
