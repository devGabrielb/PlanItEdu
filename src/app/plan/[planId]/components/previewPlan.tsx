"use client";
import { usePlan } from "@/context/planContext";

export default function PreviewPlan() {
  const { plan } = usePlan();
  return (
    <>
      <div className="h-full overflow-y-auto scrollbar-hide pt-4">
        <div className="bg-white rounded-sm shadow-md p-2 m-auto w-[210mm] max-h-[297mm] py-4 px-6 page break-before-auto">
          {plan.sections.map((s) => (
            <div key={s.id} className={s.style}>
              {s.fields.map((f) => (
                <div key={f.label} className={f.style}>
                  <span className="font-bold">{`${f.label}`}</span>:{" "}
                  <div dangerouslySetInnerHTML={{ __html: f.content }}></div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
