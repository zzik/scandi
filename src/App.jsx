import { Header, Footer, Display } from "./components/layout";
import { PayloadProvider } from "./context/PayloadContext";

export default function App() {
  return (
    <>
      <Header />
      <Display />
      <Footer />
    </>
  );
}
