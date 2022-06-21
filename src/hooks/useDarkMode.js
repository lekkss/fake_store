// import React, { useEffect, createContext, useReducer } from "react";

// const INITIAL_STATE = {
//   lightMode: localStorage.getItem("theme") || "light",
// };

// export const LightModeContext = createContext(INITIAL_STATE);

// const LightModeReducer = (state, action) => {
//   switch (action.type) {
//     case "TOGGLE":
//       return {
//         lightMode: state.lightMode === "light" ? "dark" : "light",
//       };
//     default:
//       return state;
//   }
// };

// export const LightModeContextProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(LightModeReducer, INITIAL_STATE);

//   useEffect(() => {
//     localStorage.setItem("theme", state.lightMode);
//   }, [state.lightMode]);

//   return (
//     <LightModeContext.Provider value={{ lightMode: state.lightMode, dispatch }}>
//       {children}
//     </LightModeContext.Provider>
//   );
// };
