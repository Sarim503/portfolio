import React from "react";
import { Lock } from "lucide-react";
import Link from "next/link";

export default function PrivateProject() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="bg-card shadow-xl rounded-2xl p-8 max-w-md text-center border border-border">
        <div className="flex justify-center mb-4">
          <div className="p-4 bg-muted rounded-full">
            <Lock className="h-10 w-10 text-foreground" />
          </div>
        </div>
        <h1 className="text-2xl font-semibold text-foreground mb-2">
          Private Repository
        </h1>
        <p className="text-muted-foreground mb-6">
          Source code is not publicly available to respect client privacy.
        </p>
        <Link
          href="/projects"
          className="inline-block px-5 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition"
        >
          Back to Projects
        </Link>
      </div>
    </div>
  );
}
