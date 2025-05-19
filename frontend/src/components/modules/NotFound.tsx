import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-6 bg-slate-200 dark:bg-slate-800 text-gray-900 dark:text-white">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-xl mt-4">Oops! Página não encontrada.</p>
      <Link to="/">
        <Button className="mt-6 px-6 py-3 text-lg rounded-lg shadow-lg bg-blue-500 hover:bg-blue-600 transition-all">
          Voltar para Home
        </Button>
      </Link>
    </div>
  );
}
