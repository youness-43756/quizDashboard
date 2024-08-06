import Filter from "@/components/appComp/home/filter/page";
import { SelectSubject } from "@/components/appComp/home/filter/select";
import SubjectsWrapper from "@/components/appComp/home/quizStateWrapper/subjectsWrapper";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="w-full flex gap-2 justify-between">
        <SelectSubject />
        <Filter />
      </div>
      <div className="space-y-8">
        <SubjectsWrapper />
      </div>
    </main >
  );
}
