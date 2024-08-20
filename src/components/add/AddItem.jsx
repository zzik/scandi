import { numericValidation } from "../../utils";
import { General, Switcher } from "./";

const AddItem = () => 
    <form
      id="product_form"
      onKeyUp={numericValidation}
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="form__heading">
        <h3>Scandiweb CRUD Form</h3> <br />
      </div>
      <General />
      <Switcher />
    </form>


export default AddItem;
