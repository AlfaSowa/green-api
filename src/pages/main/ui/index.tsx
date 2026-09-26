import { MainContent } from "@/widgets/main-content";
import { Sidebar } from "@/widgets/sidebar";

export const MainPage = () => {
  return (
    <div className="flex gap-4 p-4 w-full h-full">
      <Sidebar />

      <MainContent />
    </div>
  );
};
