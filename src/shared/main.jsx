"use client";

import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="max-h-screen bg-white">
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid items-center gap-8 md:grid-cols-2 lg:gap-16">
          {/* Left side - Text and Button */}
          <div className="flex flex-col space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                Code That Performs,
                <span className="block text-blue-600">
                  Design That Inspires
                </span>
              </h1>
              <p className="text-lg text-gray-600 md:text-xl">
                I design and develop fast, modern, and responsive web
                applications that help businesses grow in the digital world.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-8 py-3 text-base font-medium text-white shadow-lg transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Let’s Build Something Great
              </Link>
            </div>
          </div>

          {/* Right side - Image */}
          <div
            className="relative group w-full max-w-md mx-auto md:max-w-lg lg:max-w-xl"
            onMouseLeave={(e) => {
              const el = e.currentTarget.querySelector(".animate-tracer");
              if (el) {
                el.classList.remove("animate-tracer");
                void el.offsetWidth;
                el.classList.add("animate-tracer");
              }
            }}
          >
            {/* Border layer */}
            <span className="pointer-events-none absolute inset-0 rounded-2xl border border-transparent group-hover:border-b-gray-950 group-hover:opacity-100 opacity-0 transition-all duration-300 z-10">
              <span className="absolute h-2 w-2 bg-gradient-to-b from-blue-200 via-blue-400 to-blue-500 rounded-full animate-tracer" />
            </span>

            {/* Image */}
            <Image
              src="/sarim.jpg"
              alt="builder Image"
              width={600}
              height={600}
              className="rounded-2xl shadow-2xl object-cover w-full h-auto transition-transform duration-700 group-hover:scale-x-[-1] max-w-sm md:max-w-md lg:max-w-md xl:max-w-md"
              sizes="(max-width: 768px) 80vw,
         (max-width: 1024px) 60vw,
         (max-width: 1280px) 50vw,
         600px"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
