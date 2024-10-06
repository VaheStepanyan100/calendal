import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="text-center container my-4 mx-auto">
      <h1 className="text-3xl mb-4">Fancy Home Page</h1>
      <div className="flex gap-2 justify-center">
        <Button>Sign In</Button>
        <Button>Sign Out</Button>
      </div>
    </div>
  )
}
