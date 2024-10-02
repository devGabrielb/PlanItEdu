"use client";
import { useFormContext, UseFormReturn } from "react-hook-form";
import { RefObject } from "react";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import ButtonsTips from "./buttonsTips";
import { Button } from "@/components/ui/button";
import { GeneratePlan } from "@/lib/actions/plan.actions";
import { formData } from "../../hooks/useFormSchema";

interface PromptInputProps {
  formRef: RefObject<HTMLFormElement>;
}

const PromptInput = ({ formRef }: PromptInputProps) => {
  const { control, handleSubmit, trigger } = useFormContext();
  const router = useRouter();
  const onSubmit = async (data: any) => {
    const formData = data as formData;
    const completionsResponse = await GeneratePlan(
      Number(formData.selectedTemplate),
      data.prompt
    );
    router.push(`/plan/${completionsResponse}`);
    console.log("Dados válidos:", data); // Dados do formulário
  };

  // Função para lidar com erros de validação
  const onError = (errors: any) => {
    console.log("Erros de validação:", errors);
  };
  return (
    <div className="px-20 py-4">
      <h2 className="text-xl font-semibold">Descreva seu plano de aula</h2>
      <div className="py-4">
        <form
          id="hook-form"
          ref={formRef}
          onSubmit={handleSubmit(onSubmit, onError)}
          className="space-y-8"
        >
          <FormField
            control={control}
            name="prompt"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    className="min-h-48"
                    placeholder="Descreva seu plano de aula"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
                <FormDescription>
                  <p className="mt-1 text-gray-400 text-sm">
                    Ou experimente um exemplo:
                  </p>
                </FormDescription>
              </FormItem>
            )}
          />
          <ButtonsTips className="flex flex-wrap items-center justify-center gap-2" />
        </form>
      </div>
    </div>
  );
};

export default PromptInput;
