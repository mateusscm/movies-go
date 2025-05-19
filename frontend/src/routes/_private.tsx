import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_private")({
  beforeLoad: ({ context, location }) => {
    if (!context.auth.isAuthenticated) {
      throw new Error(
        JSON.stringify(
          redirect({
            to: "/login",
            search: {
              redirect: location.href,
            },
          })
        )
      );
    }
  },
});
