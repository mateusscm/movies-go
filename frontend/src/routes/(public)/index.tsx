import { createFileRoute } from "@tanstack/react-router";
import Ticket from "@/assets/ticket.png";

export const Route = createFileRoute("/(public)/")({
  component: Home,
});

function Home() {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold">Welcome to the Movie App!</h2>
      <img src={Ticket} alt="Ticket" className="w-32 h-32" />
    </div>
  );
}
