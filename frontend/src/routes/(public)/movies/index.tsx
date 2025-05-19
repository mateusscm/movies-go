import { TMovie } from "@/types/movies";
import { createFileRoute, Link, useLoaderData } from "@tanstack/react-router";

export const Route = createFileRoute("/(public)/movies/")({
  component: RouteComponent,
  loader: async () => {
    // Simulate a network request to fetch movies
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const requestOptions = {
      method: "GET",
      headers: headers,
    };

    const movies: TMovie[] = await fetch(
      `http://localhost:8080/api/movies`,
      requestOptions
    )
      .then((response) => response.json())
      .catch((error) => {
        console.error("Error fetching movies:", error);
        return { movies: [] };
      });

    return {
      movies: movies,
    };
  },
});

function RouteComponent() {
  const { movies } = useLoaderData({
    from: "/(public)/movies/",
  });

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Title
            </th>
            <th scope="col" className="px-6 py-3">
              Release Date
            </th>
            <th scope="col" className="px-6 py-3">
              Rating
            </th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr
              key={movie.id}
              className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200"
            >
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <Link
                  to={`/movies/$movie`}
                  params={{ movie: movie.id.toString() }}
                >
                  {movie.title}
                </Link>
              </td>
              <td className="px-6 py-4">{movie.release_date}</td>
              <td className="px-6 py-4">{movie.mpaa_rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
