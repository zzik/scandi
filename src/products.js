import axios from "axios";

export async function getProducts() {
  let products = await axios.get("http://localhost/tried/list.php");
  return products.data;
}

export async function createProduct(product) {
  try {
    console.log(product)
    await axios.post("http://localhost/tried/add.php", product, {
        headers: {
            'Content-Type': 'application/application/json',
        },});
  } catch (error) {
    console.error("Error adding product:", error);
  }
}
