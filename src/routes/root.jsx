import { getProducts } from "../utils";
import { Header, Footer, Display } from "../components/layout";
import { PayloadProvider } from "../context/PayloadContext";

export default function Root() {
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
