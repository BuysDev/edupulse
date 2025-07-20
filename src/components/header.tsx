import { Button } from "./ui/button";

export function Header() {
    return (
        <header className="top-0 sticky p-4 flex items-center justify-between shadow-md">
            <h1 className="text-2xl font-bold">EduPulse</h1>
            <Button className="bg-depth-blue rounded-full font-bold text-white cursor-pointer">
                Entrar
            </Button>
        </header>
    )
}