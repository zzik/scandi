export const checkEmpty = () => {
  const nodeList = document.querySelectorAll(".input__container input");
  const inputValues = Array.from(nodeList);
  const hasEmptyInput =
    inputValues.find((el) => el.value === "") ||
    document.querySelector(".dropdown__container").value === "";
  return hasEmptyInput;
};
