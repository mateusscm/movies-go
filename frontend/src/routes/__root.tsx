import Header from "@/components/modules/Header";
import SidebarApp from "@/components/modules/SidebarApp";
import { AuthContext } from "@/context/authContext";
import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRouteWithContext<{ auth: AuthContext }>()({
  component: () => {
    return (
      <>
        <div className="flex flex-col h-screen w-full">
          <Header /> {/* Não deixa o Header crescer */}
          <div className="flex flex-1 min-h-0">
            <SidebarApp>
              <Outlet />
            </SidebarApp>
          </div>
        </div>

        <TanStackRouterDevtools position="bottom-right" />
      </>
    );
  },
});
