"use client";
import Icon from "@/components/icon";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useState } from "react";

const AddPlan = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const router = useRouter();

  return (
    <>
      <div className="text-bold">
        <div
          className="bg-white p-14 py-24 border 
        items-center flex 
        justify-center
        rounded-lg
        min-w-[210px]
        h-[280px]
        hover:scale-105 transition-all hover:shadow-md
        cursor-pointer border-dotted"
          onClick={() => setOpenDialog(true)}
        >
          <Icon name="file-plus" />
        </div>
      </div>
      <Dialog onOpenChange={setOpenDialog} open={openDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Crie um novo plano de aula</DialogTitle>
            <DialogDescription>
              <p>Adicione o titulo para o seu plano de aula</p>
              <Input
                className="my-2"
                placeholder="Ex.Plano de aula Portugues 2 ano"
                onChange={(e) => {}}
              />
            </DialogDescription>
            <div className="flex justify-end gap-5">
              <Button variant="ghost">Cancelar</Button>
              <Button onClick={() => router.push("/plan/123")}>Criar</Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddPlan;
