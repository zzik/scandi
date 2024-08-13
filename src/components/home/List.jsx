import { useLoaderData } from "react-router-dom";
import Item from "./Item";
import { getProducts } from "../../utils";
import { useEffect, useState } from "react";

const List = () => {
  // const { products } = useLoaderData();
  const [products, setProducts] = useState()
  const handleProducts = (dt) => {
    console.log(dt)
    setProducts(dt)
  }
  useEffect(() => {
    const products = getProducts().then((stuff)=>handleProducts(stuff))
    // console.log(products)
    // handleProducts(products)
  }, [])
  return (
    <ul>
      {products && products.map((product) => (
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
