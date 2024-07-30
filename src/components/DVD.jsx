import { useContext } from "react";
import DetailsContext from "../context/DetailsContext";

const Dvd = () => {
  const details = useContext(DetailsContext);

  const handleData = (value) => {
    details.props = { size: value };
  };
  return (
    <>
      <label htmlFor="size">Size (MB)</label>
      <input
        name="size"
        type="text"
        onChange={(e) => handleData(e.target.value)}
      />
    </>
  );
};

export default Dvd;
