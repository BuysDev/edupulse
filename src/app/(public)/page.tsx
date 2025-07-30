import { Header } from "@/components/header";

export default function Home() {
  return (
    <>

      <Header />
      <h1 className="text-3xl font-bold underline">Welcome to Next.js!</h1>
      <p className="mt-4 text-lg">
        This is a simple page built with Next.js and Tailwind CSS.
      </p>
      <p className="mt-2 text-sm text-gray-600">
        Explore the code to see how it works!
      </p>
    </>
  );
}