import { PlanProvider } from "@/context/planContext";
import { Plans } from "../models/plans";
import PreviewPlan from "./components/previewPlan";
import TextEditor from "./components/textEditor/textEditor";
import FormPlan from "./components/formPlan";

const plans: Plans = {
  sections: [
    {
      id: "01",
      Title: "Teste 01",
      isSelected: false,
      fields: [
        {
          label: "Série",
          type: "text",
          content:
            "<p style='font-size:16px; line-height:1.5;'>Ensino Superior - Curso de Engenharia de Software</p>",
          style: "p-2 w-30 min-h-10 border",
        },
        {
          label: "Disciplina",
          type: "text",
          content:
            "<p style='font-size:16px; line-height:1.5;'>Computação em Nuvem</p>",
          style: "p-2 w-30 min-h-10 border",
        },
        {
          label: "Data",
          type: "text",
          content: "<p style='font-size:16px; line-height:1.5;'>18/09/2024</p>",
          style: "p-2 w-30 min-h-10 border",
        },
      ],
      style: "grid grid-cols-3 gap-3",
    },
    {
      id: "02",
      Title: "teste 02",
      fields: [
        {
          label: "Tópico",
          type: "text",
          content:
            "<p style='font-size:16px; line-height:1.5;'>Introdução ao Kubernetes</p>",
          style: "p-2 w-30 min-h-10 border",
        },
        {
          label: "Aula n",
          type: "text",
          content: "<p style='font-size:16px; line-height:1.5;'>1</p>",
          style: "p-2 w-30 min-h-10 border",
        },
      ],
      style: "mt-3 grid grid-cols-2 gap-3",
    },
    {
      id: "03",
      Title: "teste 03",
      fields: [
        {
          label: "Foco e objetivos da aula",
          type: "text",
          content:
            "<p style='font-size:16px; line-height:1.8;'>Apresentar o conceito de orquestração de containers, a arquitetura do Kubernetes e sua importância no gerenciamento de aplicações em nuvem.</p>",
          style: "p-2 w-30 min-h-36 border",
        },
      ],
      style: "mt-3 grid grid-cols-1 gap-3",
    },
    {
      id: "04",
      Title: "teste 04",
      fields: [
        {
          label: "Materiais necessários",
          type: "textArea",
          content:
            "<p style='font-size:16px; line-height:1.8;'>Slides de apresentação, acesso a um cluster Kubernetes (Minikube ou EKS), terminal com kubectl instalado.</p>",
          style: "p-2 w-30 min-h-36 border",
        },
        {
          label: "Objetivos de aprendizagem",
          type: "textArea",
          content:
            "<p style='font-size:16px; line-height:1.8;'>Ao final da aula, os alunos serão capazes de: 1. Entender a arquitetura básica do Kubernetes; 2. Compreender os principais componentes (pods, services, deployments); 3. Realizar o deploy de uma aplicação simples em um cluster Kubernetes.</p>",
          style: "p-2 w-30 min-h-36 border",
        },
      ],
      style: "mt-3 grid grid-cols-2 gap-3",
    },
    {
      id: "05",
      Title: "teste 05",
      fields: [
        {
          label: "Estrutura / Atividade",
          type: "textArea",
          content:
            "<p style='font-size:16px; line-height:1.8;'>1. Introdução ao Kubernetes (20 min) - Conceitos e Arquitetura.<br>2. Demonstração prática (30 min) - Deploy de uma aplicação em um cluster Kubernetes usando kubectl.<br>3. Atividade em grupo (40 min) - Configurar um deployment e expor um serviço. Cada grupo terá que criar uma aplicação simples e fazer o deploy no Kubernetes.</p>",
          style: "p-2 w-30 min-h-80 border",
        },
      ],
      style: "mt-3 grid grid-cols-1",
    },
    {
      id: "06",
      Title: "teste 06",
      fields: [
        {
          label: "Avaliação",
          type: "textArea",
          content:
            "<p style='font-size:16px; line-height:1.8;'>A avaliação será baseada na participação nas atividades práticas, compreensão dos conceitos abordados e um pequeno quiz ao final da aula.</p>",
          style: "p-2 w-30 min-h-36 border",
        },
      ],
      style: "mt-3 grid grid-cols-1",
    },
  ],
};
export default function Plan() {
  return (
    <>
      <PlanProvider initalPlan={plans}>
        <div className="h-screen overflow-hidden grid grid-cols-2">
          <FormPlan />
          <PreviewPlan />
        </div>
      </PlanProvider>
    </>
  );
}
