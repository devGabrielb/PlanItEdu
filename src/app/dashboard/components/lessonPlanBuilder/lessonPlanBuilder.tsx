"use client";

import { useRef, useState } from "react";
import { useFormSchema } from "../../hooks/useFormSchema";
import Templates from "./templates";
import PromptInput from "./promptInput";
import { Button } from "@/components/ui/button";
import { FormProvider } from "react-hook-form";

const LessonPlanBuilder = () => {
  const [step, setStep] = useState(1);
  const [selectedTemplate, setSelectedTemplate] = useState<string>("");
  const formRef = useRef<HTMLFormElement>(null);
  const { methods } = useFormSchema();

  const handleSelectedTemplate = (id: number) => {
    setSelectedTemplate(id.toString());
    methods.setValue("selectedTemplate", id.toString(), {
      shouldValidate: true,
    });
  };

  const onSubmit = () => {
    if (formRef.current != null) {
      try {
        formRef.current.dispatchEvent(
          new Event("submit", { cancelable: true, bubbles: true })
        );
      } catch (e) {
        console.log(e);
      }
    }
  };
  const nextStep = () => setStep((prevStep) => prevStep + 1);
  const prevStep = () => setStep((prevStep) => prevStep - 1);

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <Templates
            selectedTemplate={selectedTemplate}
            handleSelectedTemplate={handleSelectedTemplate}
          />
        );
      case 2:
        return <PromptInput formRef={formRef} />;
    }
  };

  return (
    <FormProvider {...methods}>
      {renderStepContent()}
      <div className={`flex justify-between mt-4 ${step > 1 && "px-32"}`}>
        {step == 2 && <Button onClick={prevStep}>Anterior</Button>}
        {step < 3 && step != 1 && <Button onClick={onSubmit}>Finalizar</Button>}
        {step == 1 && (
          <Button
            className="w-full"
            onClick={nextStep}
            disabled={selectedTemplate === ""}
          >
            Próximo
          </Button>
        )}
      </div>
    </FormProvider>
  );
};

export default LessonPlanBuilder;
