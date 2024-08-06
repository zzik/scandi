import axios from "axios";

export async function getProducts() {
  // let products = await axios.get("http://localhost/tried/list.php");
  let products = await axios.get("https://urchin-app-gioo8.ondigitalocean.app/list.php");
  return products.data;
}

export const handleDelete = async () => {
  try {
    let data = document.querySelectorAll("input:checked");
    data = Array.from(data).map((el) => el.name);

    await axios.post(
      // "http://localhost/tried/delete.php",
      "https://github.com/zzik/scandi-server/delete.php",
      { skus: data },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    // window.location = "http://localhost:5173";
    window.location = "https://zzik-scandiweb.netlify.app/";
  } catch (error) {
    console.error("Error deleting products:", error);
  }
};

export const testSubmit = async (data) => {
  const price = parseFloat(data.price).toFixed(2)
  console.log({price, type: typeof price})
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
    // await axios.post("http://localhost/tried/add.php", params, {
    await axios.post("https://urchin-app-gioo8.ondigitalocean.app/add.php", params, {
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
      // "http://localhost/tried/check.php",
      "https://urchin-app-gioo8.ondigitalocean.app/check.php",
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
    if (el.value.match(/\D+/g)) {
      alert(alertText)
      el.value = ''
    }
  })

}