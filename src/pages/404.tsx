import Link from "next/link";
import SEO from "@/components/SEO";

export default function NotFoundPage() {
  return (
    <>
      <SEO title="Page Not Found" />
      <section className="flex min-h-[60vh] items-center justify-center px-4">
        <div className="text-center space-y-2">
          <p className="text-sm font-semibold text-blue-400">404</p>
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            This page does not exist
          </h1>
          <p className="text-gray-300">
            The page you are looking for might have been moved or deleted.
          </p>
          <div className="mt-6">
            <Link
              href="/"
              className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-500"
            >
              Go back home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
