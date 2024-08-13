import axios from "axios";
import { Header, Footer, Display } from "./components/layout";
import { PayloadProvider } from "./context/PayloadContext";

export default function App() {
    const token = "123abc345";

// Set the Authorization header globally
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  return (
    <>
      <Header />
      <Display />
      <Footer />
    </>
  );
}
