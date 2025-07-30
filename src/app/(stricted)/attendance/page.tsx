import { HubHeader } from "@/components/hub-header";
import { HubSidebar } from "@/components/hub-sidebar";
import { FaultTable } from "@/components/ui/faults-table";

export default function HubHome() {
    return (
        <div className="flex flex-row h-screen">
            <HubSidebar />
            <div className="flex-1 flex flex-col">
                <HubHeader />
                <main className="flex-1 p-6">
                   <FaultTable />
                </main>
            </div>
        </div>
    )
}
