import { Link, useLoaderData } from "react-router-dom";
import Item from "../components/Item";
import { getProducts, handleDelete } from "../utils";

export default function Root() {
  const { products } = useLoaderData();

  return (
    <>
      <Link to={"/add"}>ADD ITEM</Link>
      <button onClick={handleDelete}>MASS DELETE</button>
      <ol>
        {products.map((product) => (
          <li key={product.sku}>
            <Item product={product} />
          </li>
        ))}
      </ol>
    </>
  );
}

export async function loader() {
  const products = await getProducts();
  return { products };
}
