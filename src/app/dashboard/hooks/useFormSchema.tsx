"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export const formSchema = z.object({
  selectedTemplate: z.string().min(0, "Você deve selecionar um template"),
  prompt: z.string().min(3, "O prompt deve ter pelo menos 10 caracteres"),
});

export type formData = z.infer<typeof formSchema>;

export const useFormSchema = () => {
  const methods = useForm<formData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      selectedTemplate: "",
      prompt: "",
    },
  });

  const { handleSubmit, watch } = methods;

  return { methods, handleSubmit, watch };
};
