import { createContext,useContext } from "react";
const ColonCardContext=createContext(null);
export const ColonCardProvider=ColonCardContext.Provider;
export const useColonCards=()=>useContext(ColonCardContext);