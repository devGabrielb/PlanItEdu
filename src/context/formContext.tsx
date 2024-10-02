"use client";
import { createContext, useContext, useState } from "react";

const FormContext = createContext({});

export const useFormContext = () => useContext(FormContext);

interface formProps {
  children: React.ReactNode;
}
export function FormProvider({ children }: formProps) {
  const [textValue, setTextValue] = useState("");

  const value = {
    textValue,
    setTextValue,
  };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
}
