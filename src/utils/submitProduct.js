import axios from "axios";

export const submitProduct = async (data) => {
  const price = parseFloat(data.price).toFixed(2);
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
    await axios.post("https://www.hello060hello.fun/add.php", params, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
  } catch (error) {
    console.error("Error adding product:", error);
  }
};
