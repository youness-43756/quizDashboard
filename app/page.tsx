import Filter from "@/components/appComp/home/filter/page";
import { SelectSubject } from "@/components/appComp/home/filter/select";
import SubjectsWrapper from "@/components/appComp/home/quizStateWrapper/subjectsWrapper";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <div className="sticky top-0 bg-white z-[100] py-5">
        <div className="w-full flex gap-2 justify-between">
          <SelectSubject />
          <Filter />
        </div>
      </div>
      <div className="space-y-3">
        <SubjectsWrapper />
      </div>
    </main >
  );
}
