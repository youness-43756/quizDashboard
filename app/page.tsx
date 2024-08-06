import Filter from "@/components/appComp/home/filter/page";
import { SelectSubject } from "@/components/appComp/home/filter/select";
import SubjectsWrapper from "@/components/appComp/home/quizStateWrapper/subjectsWrapper";

export default function Home() {
  return (
    <main className="h-full w-full md:space-y-2 space-y-1">
      <div className="w-full flex gap-2 justify-between md:mb-4 mb-2">
        <SelectSubject />
        <Filter />
      </div>
      <div className="md:space-y-2 space-y-1">
        <SubjectsWrapper />
      </div>
    </main >
  );
}
