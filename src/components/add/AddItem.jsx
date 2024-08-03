import { numericValidation } from "../../utils";
import { General, Switcher } from "./";

const AddItem = () => {
  return (
    <div id="product_form" onKeyUp={numericValidation}>
      <div className="form__heading" >
        <h3>Welcome To Scandiweb</h3>
        <h4>CRUD Form</h4>
      </div>
      <General />
      <Switcher />
    </div>
  );
};

export default AddItem;
