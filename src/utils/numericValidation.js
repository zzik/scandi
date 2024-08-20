export const numericValidation = () => {
  const price = document.querySelector("#price");
  const size = document.querySelector("#size");
  const weight = document.querySelector("#weight");
  const length = document.querySelector("#length");
  const width = document.querySelector("#width");
  const height = document.querySelector("#height");
  const numericElements = [price, size, weight, length, width, height];
  const filtered = numericElements.filter((el) => el);

  filtered.forEach((el) => {
    const alertText = `Please, provide the data of indicated type`;
    if (el.value.match(/[^0-9.]+/g)) {
      alert(alertText);
      el.value = "";
    }
  });
};
