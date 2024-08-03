import { useState, createContext } from "react";

export const PayloadContext = createContext();

export const PayloadProvider = ({ children }) => {
  const [payload, setPayload] = useState({
    sku:undefined, name: undefined, price: undefined, type:undefined });

  const updatePayload = (data) => {
    setPayload(oldPayload => ({...oldPayload, ...data}));
  };

  return (
    <PayloadContext.Provider
      value={{
        payload,
        updatePayload,
      }}
    >
      {children}
    </PayloadContext.Provider>
  );
};

