import axios from "axios";

export async function getProducts() {
  let products = await axios.get("https://0603148163.mom/list.php");
  return products.data;
}

export const massDelete = async () => {
  try {
    let data = document.querySelectorAll("input:checked");
    data = Array.from(data).map((el) => el.name);

    await axios.post(
      "https://0603148163.mom/delete.php",
      { skus: data },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    window.location.href = "https://zzik-scandiweb.netlify.app/";
  } catch (error) {
    console.error("Error deleting products:", error);
  }
};

export const testSubmit = async (data) => {
  const price = parseFloat(data.price).toFixed(2)
  const params = new URLSearchParams();
  params.append("sku", data.sku);
  params.append("name", data.name);
  params.append("price", price);
  params.append("type", data.type);

  params.append("weight", data.weight);

  params.append("size", data.size);

  params.append("height", data.height);
  params.append("width", data.width);
  params.append("length", data.length);

  try {
    await axios.post("https://0603148163.mom/add.php", params, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
  } catch (error) {
    console.error("Error adding product:", error);
  }
};

export const checkSKU = async (sku) => {
  try {
    let check = await axios.get(
      "https://0603148163.mom/check.php",
      { params: { sku } },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    return check.data;
  } catch (error) {
    console.error("Error adding product:", error);
  }
};

export const checkEmpty = () => {
  const nodeList = document.querySelectorAll(".input__container input");
  const inputValues = Array.from(nodeList);
  const hasEmptyInput =
    inputValues.find((el) => el.value === "") ||
    document.querySelector(".dropdown__container").value === "";
  return hasEmptyInput;
};

export const saveHandler = (payload) => {
  const handleSKU = () =>
    checkSKU(payload.sku).then((result) => {
      if (result) {
        alert("it exists")
      } else {
        testSubmit(payload)
        window.location.href = 'https://zzik-scandiweb.netlify.app/'
      }
    }
    );
  checkEmpty() ? alert("Please, submit required data") : handleSKU();
};

export const numericValidation = () => {
  const price = document.querySelector('#price')
  const size = document.querySelector('#size')
  const weight = document.querySelector('#weight')
  const length = document.querySelector('#length')
  const width = document.querySelector('#width')
  const height = document.querySelector('#height')
  const numericElements = [price, size, weight, length, width, height]
  const filtered = numericElements.filter(el => el)

  filtered.forEach(el => {
    const alertText = `Please, provide the data of indicated type`
    if (el.value.match(/[^0-9.]+/g)) {
      alert(alertText)
      el.value = ''
    }
  })

}