import FaithfulProgressCard from "@/components/faithful-progress-card";
import { HubHeader } from "@/components/hub-header";
import { HubSidebar } from "@/components/hub-sidebar";

export default function HubHome() {
    return (
        <div className="flex flex-row h-screen">
            <HubSidebar />
            <div className="flex-1 flex flex-col p-4">
                <HubHeader />
                <main className="">
                    <FaithfulProgressCard />
                    <h1 className="text-3xl font-bold underline">Últimas Avaliações</h1>
                </main>
            </div>
        </div>
    )
}