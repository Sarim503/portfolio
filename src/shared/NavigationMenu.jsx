"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function NavigationMenuDemo() {
  return (
    <header className="w-full sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
  <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
    {/* Logo */}
    <Link href="/" className="flex items-center gap-2">
      <Avatar className="cursor-pointer w-10 h-10 text-blue-500 font-bold border-2 border-blue-700 transition-transform hover:scale-110">
        <AvatarFallback>SK</AvatarFallback>
      </Avatar>
     
    </Link>

    {/* Navigation Menu */}
   <NavigationMenu>
  <NavigationMenuList className="flex gap-x-8 text-sm font-medium text-gray-700">
    {["Home", "About", "Projects"].map((item) => (
      <NavigationMenuItem key={item} className="group relative">
        <NavigationMenuLink asChild>
          <Link
            href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            className="px-2 py-1 transition-colors hover:text-blue-600"
          >
            {item}
            <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
          </Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
    ))}
  </NavigationMenuList>
</NavigationMenu>

  </div>
</header>

  );
}
