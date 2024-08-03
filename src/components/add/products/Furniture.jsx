import { usePayload } from "../../../hooks/usePayload";
const Furniture = () => {
  const { updatePayload } = usePayload();
  const handleUpdate = (event) => {
    const { name, value } = event.target;
    updatePayload({ [name]: value });
  };
  return (
    <div className="product-props__container">
      <p>Please, provide dimensions.</p>
      <div className="input__container">
        <label htmlFor="height">Height (CM)</label>
        <input id="height" name="height" type="text" onChange={handleUpdate} />
      </div>
      <div className="input__container">
        <label htmlFor="width">Width (CM)</label>
        <input id="width" name="width" type="text" onChange={handleUpdate} />
      </div>
      <div className="input__container">
        <label htmlFor="length">Length (CM)</label>
        <input id="length" name="length" type="text" onChange={handleUpdate} />
      </div>
    </div>
  );
};

export default Furniture;
