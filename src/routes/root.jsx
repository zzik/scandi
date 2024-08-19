import { getProducts } from "../utils";
import { Header, Footer, Display } from "../components/layout";
import { PayloadProvider } from "../context/PayloadContext";
import { useEffect } from "react";

export default function Root() {
  useEffect(() => {
    document.title = 'Product List';
  }, []);
  return (
    <PayloadProvider>
      <Header />
      <Display />
      <Footer />
    </PayloadProvider>
  );
}

export async function loader() {
  const products = await getProducts();
  return { products };
}
