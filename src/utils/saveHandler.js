import { checkEmpty } from "./checkEmpty";
import { submitProduct } from "./submitProduct";

export const saveHandler = (payload) => {
  const notEmpty = () => {
    submitProduct(payload);
    window.location.href = "https://zzik-scandiweb.netlify.app/";
  };
  checkEmpty() ? alert("Please, submit required data") : notEmpty();
};
