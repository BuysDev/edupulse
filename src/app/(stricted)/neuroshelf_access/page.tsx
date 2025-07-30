import { HubHeader } from "@/components/hub-header";
import { HubSidebar } from "@/components/hub-sidebar";

import prisma from "@/db";

export default async function NeuroshelfAccessPage() {
  const user = await prisma.user.findUnique({
    where: {
      email: "user@example.com",
    },
  });

  return (
    <div className="flex flex-row h-screen"> {/* h-screen aqui */}
      <HubSidebar />
      <div className="flex-1 flex flex-col">
        <HubHeader />
        <main className="flex-1 p-6">
          <h1 className="text-3xl font-bold underline">Aqui está sua senha para acessar o Neuroshelf!</h1>
          <p className="mt-4 text-lg">
            Senha: <span className="font-mono">{user?.password}</span>
          </p>
          <p className="mt-2 text-sm text-gray-600">
            Explore o código para ver como funciona!
          </p>
        </main>
      </div>
    </div>
  )
}
