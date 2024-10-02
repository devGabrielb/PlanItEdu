"use client";

import * as React from "react";

import { Input } from "@/components/ui/input";
import { Field, Plans, Section } from "../../models/plans";
import TextEditor from "./textEditor/textEditor";
import { cn } from "@/lib/utils";
import Accordian, { AccordianItem } from "@/components/accordian";

interface PlanItemFormProps {
  section: Section;
  SetSection: (section: Section) => void;
  className?: string;
}

const FormInput = (
  type: string,
  section: Section,
  field: Field,
  SetSection: (section: Section) => void
) => {
  switch (type) {
    case "text":
      return (
        <Input
          value={field.content}
          onChange={(e) => {
            SetSection({
              ...section,
              fields: section.fields.map((f) =>
                f.label === field.label ? { ...f, content: e.target.value } : f
              ),
            });
          }}
        />
      );
    case "textArea":
      return (
        <TextEditor
          field={field}
          setSection={(e) => {
            SetSection({
              ...section,
              fields: section.fields.map((f) =>
                f.label === field.label ? { ...f, content: e } : f
              ),
            });
          }}
        />
      );
    default:
      return (
        <Input
          value={field.content}
          onChange={(e) => {
            SetSection({
              ...section,
              fields: section.fields.map((f) =>
                f.label === field.label ? { ...f, content: e.target.value } : f
              ),
            });
          }}
        />
      );
  }
};

export function FormPlanItem({
  section,
  SetSection,
  className,
}: PlanItemFormProps) {
  return (
    <>
      {section.fields.map((field) => (
        <AccordianItem
          key={field.label}
          value={field.label}
          trigger={field.label}
        >
          <div>
            <TextEditor
              field={field}
              setSection={(e) => {
                SetSection({
                  ...section,
                  fields: section.fields.map((f) =>
                    f.label === field.label ? { ...f, content: e } : f
                  ),
                });
              }}
            />
          </div>
        </AccordianItem>
      ))}
    </>
  );
}
