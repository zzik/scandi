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

export const testSubmit = (data) => {
  

  const params = new URLSearchParams();
  params.append('sku', data.sku)
  params.append('name', data.name)
  params.append('price', data.price)
  let test = Object.entries(data.props)
  test.forEach(elem => {
    params.append(`${elem[0]}`, elem[1])
  })
  // params.append('props', data.props)

  console.log({params, data, test})
  // console.log('works')
  // console.log(data)
  // console.log('done')
}

export const handleSubmit = async () => {
//   let sku = document.querySelector('input[name=sku]').value
//   let name = document.querySelector('input[name=name]').value
//   let price = document.querySelector('input[name=price]').value
//   let attribute_name = document.querySelector('select[name=attribute_name]').value
//   let attribute_value = document.querySelector('input[name=attribute_value]').value
//   let oop = document.querySelector('select[name=attribute_name]').selectedOptions[0].innerText
//   const items = [
//     {name:"sku", value:sku},
//     {name:"name", value:name},
//     {name:"price", value:price},
//     {name:"attribute_name", value:attribute_name},
//     {name:"attribute_value", value:attribute_value},
//     {name:"oop", value:oop}
//   ]

//   const params = new URLSearchParams();
//   items.forEach(el => params.append(`${el.name}`, el.value))

//   try {
//     await axios.post("http://localhost/tried/add.php", params, {
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded",
//       },
//     });

//   } catch (error) {
//     console.error("Error adding product:", error);
//   }
};