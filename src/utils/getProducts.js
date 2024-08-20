import axios from "axios";

export const getProducts = async () => {
  let products = await axios.get("https://www.hello060hello.fun/list.php");
  return products.data;
};
