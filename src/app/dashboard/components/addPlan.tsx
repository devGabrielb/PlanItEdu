"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FC, ReactNode, useState } from "react";
import LessonPlanBuilder from "./lessonPlanBuilder/lessonPlanBuilder";

interface AddPlanProps {
  children?: ReactNode;
}
const AddPlan: FC<AddPlanProps> = ({ children }) => {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <>
      <Dialog onOpenChange={setOpenDialog} open={openDialog}>
        <DialogTrigger asChild>
          <Button variant="default">{children}Novo plano</Button>
        </DialogTrigger>
        <DialogContent className="h-[80%] max-w-[50%]">
          <DialogHeader>
            <DialogTitle>Crie um novo plano de aula</DialogTitle>
          </DialogHeader>
          <LessonPlanBuilder />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddPlan;
