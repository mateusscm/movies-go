import { Home, PlaySquare } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "../ui/sidebar";
import { Link, useLocation, useNavigate } from "@tanstack/react-router";
import { Button } from "../ui/button";
import { useAuth } from "@/hooks/useAuth";
import { motion } from "framer-motion";

export default function SidebarApp({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const data = {
    nav: [
      { name: "Home", icon: Home, to: "/" },
      { name: "Movies", icon: PlaySquare, to: "/movies", private: false },
      { name: "Genres", icon: PlaySquare, to: "/genres", private: false },
      {
        name: "Add Movies",
        icon: PlaySquare,
        to: "/add-movies",
        private: true,
      },
      {
        name: "Manage Catalogue",
        icon: PlaySquare,
        to: "/catalogue",
        private: true,
      },
      { name: "GraphQL", icon: PlaySquare, to: "/graphql", private: true },
    ],
  };

  const { pathname } = useLocation();

  const handleLogout = () => {
    logout();
    navigate({
      to: "/login",
      replace: true,
    })
      .then(() => null)
      .catch((err: unknown) => err);
  };

  return (
    <SidebarProvider className="items-start flex h-full min-h-0 overflow-hidden">
      <Sidebar collapsible="none" className="hidden md:flex shrink-0">
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {data.nav.map((item) => {
                  if (item.private && !isAuthenticated) return null;
                  return (
                    <SidebarMenuItem key={item.name}>
                      <SidebarMenuButton
                        asChild
                        isActive={item.to === pathname}
                      >
                        <Link to={item.to}>
                          <item.icon />
                          <span>{item.name}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        {isAuthenticated && (
          <SidebarFooter>
            <Button onClick={handleLogout}>Logout</Button>
          </SidebarFooter>
        )}
      </Sidebar>
      <motion.main
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="flex flex-1 flex-col p-2 overflow-auto h-full transition-all duration-300"
      >
        {children}
      </motion.main>
    </SidebarProvider>
  );
}
