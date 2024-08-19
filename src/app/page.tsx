import CourseworkCard from "@/components/CourseworkCard";
import EvaluateForm from "@/components/EvaluateForm";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="mx-auto max-w-screen-lg px-4 lg:px-10">
        {/* Upload Section */}
        <div className="flex flex-col md:flex-row gap-3 py-4 md:py-10">
          <div className="flex-1">
            <h1 className="text-lg md:text-xl font-bold mb-4 md:mb-6">
              Hey IB Folks! Unsure about the quality of your answers?{' '}
              <span className="text-primary">We get you.</span>
            </h1>
            <EvaluateForm />
          </div>
          {/* Design Section */}
          <div className="hidden md:flex md:flex-col md:items-center md:w-1/3 lg:w-1/4">
            <Image src="/spaceman.png" alt="Spaceman" width={300} height={300} />
            <Image src="/gradecard.png" alt="Grade Card" width={250} height={250} />
          </div>
        </div>
        {/* My Coursework */}
        <div className="w-full h-auto py-6 md:py-8 space-y-4">
          <p className="font-semibold text-muted-foreground">My Coursework</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <CourseworkCard />
            <CourseworkCard />
          </div>
          <div className="flex justify-center mt-4">
            <Button variant="ghost">View All</Button>
          </div>
        </div>
      </div>
    </>
  );
}
