// src/shared/NavigationMenu.jsx

"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function NavigationMenuDemo() {
  return (
    <div className="w-full flex items-center justify-between px-4 py-3 border-b bg-blue-400">
      <div className="text-xl font-bold">
      <Link href="/">
      <Avatar className="cursor-pointer">
        <AvatarImage src="/ssa.webp" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </Link>
      </div>

      {/* Right Side: Navigation Menu */}
      <NavigationMenu>
        <NavigationMenuList className="flex gap-x-6">
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/">Home</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/about">About</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/projects">Projects</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
