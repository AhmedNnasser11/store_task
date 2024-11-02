import { routes } from "@/config/routes";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center px-4">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-gray-600 mb-4">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link href={routes.home}>
          <a className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Go to Home
          </a>
        </Link>
      </div>
    </div>
  );
}
