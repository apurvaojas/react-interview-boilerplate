import { useReducer } from "react";
import App from "./App";
import { AppContext } from "./app/context/context";
import { initialState, mainReducer } from "./app/context/reducer";

export const AppContextProvider = () => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <App />
    </AppContext.Provider>
  );
};
