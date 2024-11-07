import { createContext, useState } from "react";

export const SmallScreenContext = createContext();

export const SmallScreenProvider = ({ children }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  return (
    <SmallScreenContext.Provider value={{ isSmallScreen, setIsSmallScreen }}>
      {children}
    </SmallScreenContext.Provider>
  );
};
