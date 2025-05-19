import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(public)/genres/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(public)/genres/"!</div>
}
