import axios from "axios";

export async function getProducts() {
  let products = await axios.get("http://localhost/tried/list.php");
  return products.data;
}

export const handleDelete = async () => {
  try {
    let data = document.querySelectorAll("input:checked");
    data = Array.from(data).map((el) => el.name);

    await axios.post(
      "http://localhost/tried/delete.php",
      { skus: data },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    window.location = "http://localhost:5173";
  } catch (error) {
    console.error("Error deleting products:", error);
  }
};
