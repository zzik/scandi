import { usePayload } from "../../../hooks/usePayload";

const Dvd = () => {
  const { updatePayload } = usePayload();
  const handleUpdate = (event) => {
    const { name, value } = event.target;
    updatePayload({[name]:value});
  };
  return (
    <div className="input__container">
    <p>Please, provide size</p>
      <label htmlFor="size">Size (MB)</label>
      <input id="size" name="size" type="text" onChange={handleUpdate} />
    </div>
  );
};

export default Dvd;
