import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_private/add-movies/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_private/addMovies/"!</div>
}
