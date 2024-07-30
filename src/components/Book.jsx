import { useContext } from "react";
import DetailsContext from "../context/DetailsContext";

const Book = () => {
  const details = useContext(DetailsContext);

  const handleData = (value) => {
    details.props = { weight: value };
  };

  return (
    <>
      <label htmlFor="weight">Weight (KG)</label>
      <input
        name="weight"
        type="text"
        onChange={(e) => handleData(e.target.value)}
      />
    </>
  );
};

export default Book;
