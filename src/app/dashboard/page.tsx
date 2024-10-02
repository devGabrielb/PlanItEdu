import Icon from "@/components/icon";
import AddPlan from "./components/addPlan";
import PlanItem from "./components/planItem";

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
            <AddPlan>
              <span className="mr-2">
                <Icon name="plus" />
              </span>
            </AddPlan>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row gap-4">
            <PlanItem></PlanItem>
            <PlanItem></PlanItem>
            <PlanItem></PlanItem>
          </div>
        </div>
      </div>
    </>
  );
}
