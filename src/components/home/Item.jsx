const Item = (product) => {
  return (
    <li className="product">
      <input className="delete-checkbox" type="checkbox" name={product.sku}></input>
      <div className="details">
        <p>{product.sku}</p>
        <p>{product.name}</p>
        <p>{product.price} $</p>
        <p>
          {product.attribute_name}: {product.attribute_value}
        </p>
      </div>
    </li>
  );
};

export default Item;
