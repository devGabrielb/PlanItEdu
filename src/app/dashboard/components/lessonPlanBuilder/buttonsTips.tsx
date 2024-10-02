"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { useFormContext, UseFormReturn } from "react-hook-form";

const examples = {
  portugues: "oap",
  robotica: "sdsdssd",
  fisica: "sdsdsd",
  matematica: "sdsdsdsd",
  "algoritioms e estruturas de dados": "sdsfdfdfd",
  "jogos digitais": "sdsfdf",
};

interface ButtonsTipsProps {
  className?: string;
}
const ButtonsTips = ({ className }: ButtonsTipsProps) => {
  const { trigger, watch, setValue, clearErrors } = useFormContext();
  const [activeButtonId, setActiveButtonId] = useState<string | null>(null);
  const validateForm = async () => {
    const isValid = await trigger();
    if (isValid) {
      clearErrors();
    }
  };

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.currentTarget;
    const text = target.textContent || "";

    setValue("prompt", examples[text as keyof typeof examples], {
      shouldValidate: true,
    });
    setActiveButtonId(text);
    validateForm();
  };

  useEffect(() => {
    const subscription = watch((value) => {
      if (value.prompt === "") {
        setActiveButtonId(null);
      }
    });
    return () => subscription.unsubscribe();
  }, [watch]);
  return (
    <>
      <div className={cn("", className)}>
        {Object.entries(examples).map(([key]) => {
          return (
            <Badge
              className={`${
                activeButtonId == key ? "bg-primary text-white" : ""
              } cursor-pointer hover:bg-primary hover:text-white transition-colors duration-300`}
              variant="secondary"
              key={key}
              onClick={handleClick}
            >
              {key}
            </Badge>
          );
        })}
      </div>
    </>
  );
};

export default ButtonsTips;
