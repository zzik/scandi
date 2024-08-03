import { useLoaderData } from "react-router-dom";
import Item from "./Item";

const List = () => {
  const { products } = useLoaderData();
  return (
    <ul>
      {products.map((product) => (
          <Item
            key={product.sku}
            sku={product.sku}
            name={product.name}
            price={product.price}
            attribute_name={product.attribute_name}
            attribute_value={product.attribute_value}
          />
        ))}
    </ul>
  );
};

export default List;
