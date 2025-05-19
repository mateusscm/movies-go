import { createFileRoute, useLoaderData } from "@tanstack/react-router";

export const Route = createFileRoute("/(public)/movies/$movie/")({
  component: RouteComponent,
  loader: async ({ params }) => {
    // Simulate a network request to fetch movie details
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (!params.movie) {
      throw new Error("Movie ID is required");
    }

    console.log(params.movie);
    return {
      movie: params.movie,
    };
  },
});

function RouteComponent() {
  const data = useLoaderData({ from: "/(public)/movies/$movie/" });

  if (!data) {
    return <div>Loading...</div>;
  }

  return <div>{data.movie}</div>;
}
