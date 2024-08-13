import { numericValidation } from "../../utils";
import { General, Switcher } from "./";

const AddItem = () => {
  return (
    <form id="product_form" onKeyUp={numericValidation} onSubmit={(e) => e.preventDefault()}>
      <div className="form__heading" >
        <h3>Welcome To Scandiweb</h3>
        <h4>CRUD Form</h4>
      </div>
      <General />
      <Switcher />
    </form>
  );
};

export default AddItem;
