import { createContext, useState } from "react";

export const LangContext = createContext();

export const LangProvider = ({ children }) => {
  const [leng, setLang] = useState("en");

  return (
    <LangContext.Provider value={{ leng, setLang }}>
      {children}
    </LangContext.Provider>
  );
};
