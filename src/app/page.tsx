import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center space-y-12">
      <div className="space-y-6 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Create Beautiful Surveys</h1>
        <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
          Design, share, and analyze surveys with our simple yet powerful tool. Get started in seconds.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/create">Create Survey</Link>
          </Button>
          <Button variant="outline" size="lg">
            <Link href="/surveys">View Demos</Link>
          </Button>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="rounded-lg border p-6">
          <h3 className="text-xl font-bold">Multiple Question Types</h3>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            Text, choice, rating, and more - all the question types you need.
          </p>
        </div>
        <div className="rounded-lg border p-6">
          <h3 className="text-xl font-bold">Real-time Analytics</h3>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            See responses as they come in with visual analytics.
          </p>
        </div>
        <div className="rounded-lg border p-6">
          <h3 className="text-xl font-bold">Easy Sharing</h3>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            Share your surveys with a simple link. No account required.
          </p>
        </div>
      </div>
    </div>
  );
}