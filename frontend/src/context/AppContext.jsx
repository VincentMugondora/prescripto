import { createContext } from "react";
import { doctors } from "../assets/assets";

// Create a context
export const AppContext = createContext();

const AppContextProvider = (props) => {
  const currencySymbol = "$";

  // Define the value to be provided
  const value = {
    doctors,
    currencySymbol,
  };

  return (
    <AppContext.Provider value={value}>
      {props.children} {/* Render children components */}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
