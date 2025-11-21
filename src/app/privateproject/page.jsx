import React from "react";
import { Lock } from "lucide-react";
import Link from "next/link";

export default function PrivateProject() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md text-center">
        <div className="flex justify-center mb-4">
          <div className="p-4 bg-gray-100 rounded-full">
            <Lock className="h-10 w-10 text-gray-700" />
          </div>
        </div>
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">
          Private Repository
        </h1>
        <p className="text-gray-600 mb-6">
          Source code is not publicly available to respect client privacy.
        </p>
        <Link
          href="/projects"
          className="inline-block px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          Back to Projects
        </Link>
      </div>
    </div>
  );
}
