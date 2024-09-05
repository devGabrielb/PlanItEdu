"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { Button } from "../../../components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../components/ui/form";
import { Input } from "../../../components/ui/input";

const formSchema = z.object({
  serie: z.string().min(1, { message: "Serie is required." }),
  numeroAlunos: z
    .number()
    .min(1, { message: "Number of students must be at least 1." }),
  perfilTurma: z.string().min(1, { message: "Perfil Turma is required." }),
  competencias: z.string().min(1, { message: "Competencias is required." }),
  objetivos: z.string().min(1, { message: "Objetivos is required." }),
  tema: z.string().min(1, { message: "Tema is required." }),
  prerequisitos: z.string().min(1, { message: "Prerequisitos is required." }),
});

export type formData = z.infer<typeof formSchema>;

const MultiStepForm = () => {
  const form = useForm<formData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      serie: "",
      numeroAlunos: 0,
      perfilTurma: "",
      competencias: "",
      objetivos: "",
      tema: "",
      prerequisitos: "",
    },
  });

  return (
    <>
      <h2 className="text-[#0e161b] tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">
        Create a lesson plan with AI
      </h2>
      <p className="text-[#0e161b] text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">
        Start by providing essential information. Then, our AI will generate the
        rest of the lesson plan for you.
      </p>
      <div className="px-20">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((data) => console.log(data))}
            className="space-y-8"
          >
            <FormField
              control={form.control}
              name="serie"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Série/Ano Escolar</FormLabel>
                  <FormControl>
                    <Input placeholder="2 ano" {...field} />
                  </FormControl>
                  <FormDescription>
                    Informe a série ou ano escolar.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>

            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </>
  );
};

export default MultiStepForm;
