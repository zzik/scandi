import { useContext } from "react";
import DetailsContext from "../context/DetailsContext";

const Furniture = () => {
  const details = useContext(DetailsContext);

  details.props = {
    height: 0,
    width: 0,
    length: 0,
  };

  const handleHeight = (value) => (details.props.height = value);
  const handleWidth = (value) => (details.props.width = value);
  const handleLength = (value) => (details.props.length = value);

  return (
    <>
      <label htmlFor="height">Height (CM)</label>
      <input
        name="height"
        type="text"
        onChange={(e) => handleHeight(e.target.value)}
      />
      <br />
      <label htmlFor="width">Width (CM)</label>
      <input
        name="width"
        type="text"
        onChange={(e) => handleWidth(e.target.value)}
      />
      <br />
      <label htmlFor="length">Length (CM)</label>
      <input
        name="length"
        type="text"
        onChange={(e) => handleLength(e.target.value)}
      />
    </>
  );
};

export default Furniture;
