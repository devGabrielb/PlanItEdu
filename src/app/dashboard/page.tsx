import Icon from "@/components/icon";
import AddPlan from "./components/addPlan";
import PlanItem from "./components/planItem";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-row my-20 justify-between items-center">
          <div className="flex flex-col items-start">
            <h1 className="text-xl font-black">Plan Builder</h1>
            <h4 className="text-lg font-normal text-gray-400">
              Crie seus planos de aula utilizando IA
            </h4>
          </div>
          <div>
            <Button>
              <span className="mr-2">
                <Icon name="plus" />
              </span>
              Novo Plano
            </Button>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row justify-between mb-14">
            <div className="flex flex-col">
              <h1 className="text-3xl font-bold">Meus Planos</h1>
              <p className="mt-4 text-gray-400">
                Seu primeiro Plano de Aula – 100% gratuito, para sempre, com
                todos os recursos e downloads ilimitados
              </p>
            </div>

            <div className="inline-flex items-center">
              <h4 className="mr-4 font-bold">Ver mais</h4>
              <span>
                <Icon name="arrow-right" />
              </span>
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <AddPlan></AddPlan>
            <PlanItem></PlanItem>
            <PlanItem></PlanItem>
            <PlanItem></PlanItem>
          </div>
        </div>
      </div>
    </>
  );
}
