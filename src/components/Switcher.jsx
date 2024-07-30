import { useContext, useState } from "react";
import Book from "./Book";
import Dvd from "./DVD";
import Furniture from "./Furniture";
import DetailsContext from "../context/DetailsContext";

const Switcher = () => {
  const details = useContext(DetailsContext);
  const [type, setType] = useState("");

  const handleType = (value) => {
    details.props = {};
    details.type = value;
    setType(value);
  };

  return (
    <>
      <label htmlFor="type">Type Switcher</label>
      <select name="type" onChange={(e) => handleType(e.target.value)}>
        <option value="">----</option>
        <option value="Book">Book</option>
        <option value="DVD">DVD</option>
        <option value="Furniture">Furniture</option>
      </select>
      <br />
      <br />

      <div>
        {type === "Book" && <Book />}
        {type === "DVD" && <Dvd />}
        {type === "Furniture" && <Furniture />}
      </div>
    </>
  );
};

export default Switcher;
