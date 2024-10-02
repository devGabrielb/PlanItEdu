"use client";
import { usePlan } from "@/context/planContext";
import { FormPlanItem } from "./formPlanItem";
import { Section } from "../../models/plans";
import Accordian from "@/components/accordian";

const FormPlan = () => {
  const { plan, setPlan } = usePlan();
  const updateSection = (section: Section) => {
    setPlan({
      ...plan,
      sections: plan.sections.map((s) => (s.id === section.id ? section : s)),
    });
  };
  return (
    <>
      <div className="relative h-full w-full px-24 overflow-y-auto scrollbar-hide pb-56">
        <Accordian value={null}>
          {plan.sections.map((section, index) => (
            <FormPlanItem
              key={section.id}
              section={section}
              SetSection={updateSection}
              className={`${index === 0 ? "pt-0" : "pt-2"}`}
            />
          ))}
        </Accordian>
      </div>
    </>
  );
};

export default FormPlan;
