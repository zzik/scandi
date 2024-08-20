import { useState } from "react";
import { Book, DVD, Furniture } from "./products";
import { usePayload } from "../../hooks/usePayload";
const Switcher = () => {

  const { updatePayload } = usePayload();

  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    updatePayload({type:event.target.value})
    setSelectedOption(event.target.value);
  };

  const productMap = {
    Book,
    DVD,
    Furniture,
  };

  const SelectedComponent = productMap[selectedOption];

  return (
    <div className="section__container">
      <select id="productType" className="dropdown__container" onChange={handleSelectChange} value={selectedOption}>
        <option value="">Select one</option>
        <option value="Book">Book</option>
        <option value="DVD">DVD</option>
        <option value="Furniture">Furniture</option>
      </select>
      <div>{SelectedComponent && <SelectedComponent />}</div>
    </div>
  );
};

export default Switcher;
