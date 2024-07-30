import { useNavigate } from "react-router-dom";
import AddItem from "../components/AddItem";
import { handleSubmit, testSubmit } from "../utils";
import { useContext } from "react";
import DetailsContext from "../context/DetailsContext";

const Add = () => {
  const navigate = useNavigate();
  const details = useContext(DetailsContext)


  return (
    <>
      <div className="header">
        <h2 className="title">Product Add</h2>
        <div className="buttons">
          <button onClick={() => testSubmit(details)}>SAVE</button>
          {/* <button onClick={handleSubmit}>SAVE</button> */}
          <button onClick={() => navigate(-1)}>CANCEL</button>
        </div>
      </div>
      <p>{details.sku}</p>
      <div className="display">
        <AddItem />
      </div>
      <div className="footer">
        <h2>Scandiweb Test Assignment</h2>
      </div>
    </>
  );
};

export default Add;
