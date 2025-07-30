import { HubHeader } from "@/components/hub-header";
import { HubSidebar } from "@/components/hub-sidebar";
import { TestCard } from "@/components/tests-card";

export default function TestsPage() {
  return (
    <div className="flex flex-row h-screen"> {/* h-screen aqui */}
      <HubSidebar />
      <div className="flex-1 flex flex-col w-full">
        <HubHeader />
        <main className="flex-1 p-6 items-center justify-center">
          <TestCard />
        </main>
      </div>
    </div>
  )
}