import { usePayload } from "../../../hooks/usePayload";
const Book = () => {
  const { updatePayload } = usePayload();
  const handleUpdate = (event) => {
    const { name, value } = event.target;
    updatePayload({[name]:value});
  };
  return (
    <div className="input__container">
    <p>Please, provide weight</p>
      <label htmlFor="weight">Weight (KG)</label>
      <input id="weight" name="weight" type="text" onChange={handleUpdate} />
    </div>
  );
};

export default Book;
