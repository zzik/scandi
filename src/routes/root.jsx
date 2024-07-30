import { Link } from "react-router-dom";
import { getProducts, handleDelete } from "../utils";
import List from "../components/List";

export default function Root() {
  return (
    <>
      <div className="header">
        <h2 className="title">Product List</h2>
        <div className="buttons">
          <Link to={"/add-product"}>ADD</Link>
          <button onClick={handleDelete}>MASS DELETE</button>
        </div>
      </div>
      <div className="display">
        <List />
      </div>
      <div className="footer">
        <h2>Scandiweb Test Assignment</h2>
      </div>
    </>
  );
}

export async function loader() {
  const products = await getProducts();
  return { products };
}
