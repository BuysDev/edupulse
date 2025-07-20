import { HubHeader } from "@/components/hub-header";
import { HubSidebar } from "@/components/hub-sidebar";

export default function HubHome() {
    return (
        <div className="flex flex-row h-screen"> {/* h-screen aqui */}
            <HubSidebar />
            <div className="flex-1 flex flex-col">
                <HubHeader />
                <main className="flex-1 p-6">
                    <h1 className="text-3xl font-bold underline">Bem-vindo ao Hub!</h1>
                    <p className="mt-4 text-lg">
                        Esta é uma página simples construída com Next.js e Tailwind CSS.
                    </p>
                    <p className="mt-2 text-sm text-gray-600">
                        Explore o código para ver como funciona!
                    </p>
                </main>
            </div>
        </div>
    )
}