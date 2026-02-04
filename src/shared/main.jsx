"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <div
      className="min-h-screen bg-background
"
    >
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid items-center gap-8 md:grid-cols-2 lg:gap-16">
          {/* Left side - Text and Button */}
          <div className="flex flex-col space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                Code That Performs,
                <span className="block text-primary">
                  Design That Inspires
                </span>
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                I design and develop fast, modern, and responsive web
                applications that help businesses grow in the digital world.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-base font-medium text-primary-foreground shadow-lg transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Let’s Build Something Great
              </Link>
            </div>
          </div>

          {/* Right side - Image with Framer Motion */}
          <motion.div
            className="relative w-full max-w-md mx-auto md:max-w-md "
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.05, rotate: 2 }}
          >
            <Image
              src="/sarim.jpg"
              alt="builder Image"
              width={600}
              height={600}
              className="rounded-2xl shadow-2xl object-cover w-full h-auto"
              sizes="(max-width: 768px) 80vw,
                     (max-width: 1024px) 60vw,
                     (max-width: 1280px) 50vw,
                     600px"
              priority
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
