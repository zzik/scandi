import { useContext } from "react";
import { PayloadContext, PayloadProvider } from "../context/PayloadContext";

const usePayload = () => useContext(PayloadContext);
export { usePayload, PayloadProvider };