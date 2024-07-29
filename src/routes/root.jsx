import { Link, useLoaderData } from "react-router-dom";
import Item from "../components/Item";
import { getProducts } from "../products";
import axios from "axios";

export default function Root() {
  const { products } = useLoaderData();

  const handleDelete = async () => {
    try {
      let data = document.querySelectorAll("input:checked");
      data = Array.from(data).map((el) => el.name);

      await axios.post(
        "http://localhost/tried/delete.php",
        { skus: data },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      window.location = 'http://localhost:5173';
    } catch (error) {
      console.error("Error deleting products:", error);
    }
  };

  return (
    <>
      <Link to={"/add"}>ADD ITEM</Link>
      <form onSubmit={handleDelete}>
        <ol>
          {products.map((product) => (
            <li key={product.sku}>
              <Item product={product} />
            </li>
          ))}
        </ol>
        <button type="submit">MASS DELETE</button>
      </form>
    </>
  );
}

export async function loader() {
  const products = await getProducts();
  return { products };
}
