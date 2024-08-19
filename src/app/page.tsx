import EvaluateForm from "@/components/EvaluateForm";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Upload Section */}
      <div className="flex flex-col md:flex-row gap-3 p-2 md:p-10 h-auto md:h-[700px]">
        {/* Text and Content Section */}
        <div className="flex-1 max-w-full md:max-w-[700px]">
          <h1 className="text-lg md:text-xl font-bold mb-4 md:mb-6">
            Hey IB Folks! Unsure about the quality of your answers?{' '}
            <span className="text-primary">We get you.</span>
          </h1>
          <EvaluateForm />
        </div>

        {/* Design Section */}
        <div className="hidden md:block md:w-[250px] flex-shrink-0">
          <div className="flex justify-center pt-[110px]">
            <Image src="/spaceman.png" alt="Spaceman" width={400} height={400} />
          </div>
          <div className="">
            <Image src="/gradecard.png" alt="Grade Card" width={300} height={300} />
          </div>
        </div>
      </div>
    </>
  );
}
