import Filter from "@/components/appComp/home/filter/page";
import { SelectSubject } from "@/components/appComp/home/filter/select";
import Wrapper from "@/components/appComp/home/quizStateWrapper/wrapper";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="w-full flex gap-2 justify-between md:mb-8 mb-4">
        <SelectSubject />
        <Filter />
      </div>
      <div className="space-y-3">
        <Wrapper />
      </div>
    </main>
  );
}
