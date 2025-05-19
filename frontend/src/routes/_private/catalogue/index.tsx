import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_private/catalogue/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_private/catalogue/"!</div>
}
