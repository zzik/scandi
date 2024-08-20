import axios from "axios";

export const massDelete = async () => {
  try {
    let data = document.querySelectorAll("input:checked");
    data = Array.from(data).map((el) => el.name);

    await axios.post(
      "https://www.hello060hello.fun/delete.php",
      { skus: data },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    window.location.replace("https://zzik-scandiweb.netlify.app/");
  } catch (error) {
    console.error("Error deleting products:", error);
  }
};
