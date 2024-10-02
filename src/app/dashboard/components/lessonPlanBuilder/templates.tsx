"use client";
import { fetchTemplates } from "@/lib/actions/dashboard.actions";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";

interface TemplatesProps {
  selectedTemplate: string;
  handleSelectedTemplate: (id: number) => void;
}

const Templates = ({
  selectedTemplate,
  handleSelectedTemplate,
}: TemplatesProps) => {
  const { register } = useFormContext();
  const [templates, setTemplates] = useState<TemplateProp[]>([]);
  useEffect(() => {
    const handleTemplates = async () => {
      const templates = await fetchTemplates();
      setTemplates(templates);
    };
    handleTemplates();
  }, []);
  return (
    <>
      <h2 className="text-xl font-semibold">Selecione um Template</h2>
      <div className="relative flex flex-col justify-center items-center overflow-y-scroll">
        <div className="h-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-4">
          {templates.map((template) => (
            <div
              key={template.id}
              onClick={() => handleSelectedTemplate(template.id)}
              className={`p-4 border rounded-lg cursor-pointer ${
                selectedTemplate === template.id.toString()
                  ? "border-blue-300"
                  : "border-gray-300"
              }`}
            >
              <input type="hidden" {...register("selectedTemplate")} />
              <Image
                src={template.imageUrl}
                alt={template.title}
                width={300}
                height={500}
                className="w-full h-40 object-contain"
              />
              <h3 className="mt-2 font-medium">{template.title}</h3>
              <p className="text-sm text-gray-600">{template.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Templates;
