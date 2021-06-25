import { useContext, createContext, useState } from "react";

const appContext = createContext();

export const ContextWrapper = ({ children }) => {
  const [count, setCount] = useState(5);
  // const state = { count: 5 };
  return (
    <appContext.Provider value={[count, setCount]}>
      {children}
    </appContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(appContext);
};
