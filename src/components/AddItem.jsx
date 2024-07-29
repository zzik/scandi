import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddItem = () => {
  const navigate = useNavigate();

  const [sku, setSku] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [attributeValue, setAttributeValue] = useState("");
  const [productType, setProductType] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create a URL-encoded string
    const params = new URLSearchParams();
    params.append("sku", sku);
    params.append("name", name);
    params.append("price", price);
    params.append("attribute_name", type);
    params.append("attribute_value", attributeValue);
    params.append("oop", productType);

    try {
      await axios.post("http://localhost/tried/add.php", params, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      // Clear the form
      setSku("");
      setName("");
      setPrice("");
      setType("");
      setAttributeValue("");
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const handleProductType = () => {
    let currentOption = document.querySelector(
      "select option:checked"
    ).innerText;
    setProductType(currentOption);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>SKU:</label>
          <input
            type="text"
            name="sku"
            value={sku}
            onChange={(e) => setSku(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Type:</label>
          <select
            value={type}
            name="attribute_name"
            onChange={(e) => {
              handleProductType();
              setType(e.target.value);
            }}
            required
          >
            <option value="">Select type</option>
            <option value="size">DVD</option>
            <option value="weight">Book</option>
            <option value="dimensions">Furniture</option>
          </select>
        </div>
        {type && (
          <div>
            <label>
              {type === "size" && "Size (MB)"}
              {type === "weight" && "Weight (KG)"}
              {type === "dimensions" && "Dimensions (HxWxL)"}
            </label>
            <input
              type="text"
              name="attribute_value"
              value={attributeValue}
              onChange={(e) => setAttributeValue(e.target.value)}
              required
            />
          </div>
        )}
        <button type="submit">Add Product</button>
      </form>
      <button type="button" onClick={() => navigate(-1)}>
        CANCEL
      </button>
    </>
  );
};

export default AddItem;
