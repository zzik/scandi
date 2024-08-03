import { usePayload } from "../../hooks/usePayload";
const General = () => {
  const { updatePayload } = usePayload();

  return (
    <div className="section__container">
      <div className="input__container">
        <label htmlFor="sku">SKU</label>
        <input
          id="sku"
          type="text"
          name="sku"
          onChange={(e) => updatePayload({ sku: e.target.value })}
        />
      </div>
      <div className="input__container">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          onChange={(e) => updatePayload({ name: e.target.value })}
        />
      </div>
      <div className="input__container">
        <label htmlFor="price">Price</label>
        <input
          id="price"
          type="number"
          min={0}
          name="price"
          onChange={(e) => updatePayload({ price: e.target.value })}
        />
      </div>
    </div>
  );
};

export default General;
