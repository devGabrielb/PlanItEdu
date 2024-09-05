import MultiStepForm from "../components/multiStepForm";

export default function Plan() {
  return (
    <>
      <div className=" h-screen w-full flex items-center justify-centerflex flex-col md:flex-row">
        <div className="w-full md:w-1/2 h-1/2 md:h-full p-8">
          <MultiStepForm />
        </div>
        <div className="w-full md:w-1/2 h-1/2 md:h-full bg-yellow-100">Oap</div>
      </div>
    </>
  );
}
