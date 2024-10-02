"use client";
import { Plans } from "@/app/plan/models/plans";
import { createContext, useState, useContext } from "react";

interface PlanContextType {
  plan: Plans;

  setPlan: React.Dispatch<React.SetStateAction<Plans>>;
}
// Cria o contexto
const PlanContext = createContext<PlanContextType | undefined>(undefined);

// Hook para facilitar o acesso ao contexto
export const usePlan = () => {
  const context = useContext(PlanContext);

  if (!context) {
    throw new Error("usePlan must be used within a PlanProvider");
  }

  return context;
};

// Provider para envolver a aplicação
import { ReactNode } from "react";

interface PlanProviderProps {
  children: ReactNode;
  initalPlan: Plans;
}

export const PlanProvider = ({ initalPlan, children }: PlanProviderProps) => {
  const [plan, setPlan] = useState<Plans>(initalPlan);

  return (
    <PlanContext.Provider value={{ plan, setPlan }}>
      {children}
    </PlanContext.Provider>
  );
};
