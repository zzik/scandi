const Item = (product) => {
  product = product.product;
  return (
    <div>
      <input type="checkbox" name={product.sku}></input>
      <p>{product.sku}</p>
      <p>{product.name}</p>
      <p>{product.price} $</p>
      <p>{product.attribute_name}: {product.attribute_value}</p>
    </div>
  );
};

export default Item;
