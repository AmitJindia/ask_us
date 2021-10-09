import { createContext, useContext } from "react";

export const TemplateContext = createContext();
export const useTemplate = () => useContext(TemplateContext);