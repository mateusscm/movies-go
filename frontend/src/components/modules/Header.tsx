import { useNavigate } from "@tanstack/react-router";
import { Button } from "../ui/button";
import { ModeToggle } from "./ModeToggle";
import { useAuth } from "@/hooks/useAuth";

export default function Header() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  return (
    <div className="flex items-center p-2 gap-2 bg-slate-200 dark:bg-slate-800">
      <h2 className="">Movie App</h2>
      <div className="flex items-center gap-2 ml-auto">
        {!isAuthenticated && (
          <Button
            variant="ghost"
            className="ml-auto"
            onClick={() => {
              navigate({ to: "/login" });
            }}
          >
            <span className="text-sm">Login</span>
          </Button>
        )}
        <ModeToggle />
      </div>
    </div>
  );
}
