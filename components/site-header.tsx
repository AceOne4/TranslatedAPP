import Link from "next/link";
import React from "react";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";

export default function SiteHeader() {
  const navLinks = [
    {
      title: "Course Program",
      href: "/course-program",
    },
    {
      title: "Bootcamp",
      href: "/bootcamp",
    },
    {
      title: "Community",
      href: "/community",
    },
    {
      title: "About Us",
      href: "/about",
    },
  ];
  return (
    <div>
      <header className="flex items-center justify-between max-w-6xl mx-auto py-4">
        <Link className="font-semibold" href={"/"}>
          Learn with JB
        </Link>
        <nav className="flex items-center justify-between gap-8">
          {navLinks.map((item, i) => {
            return (
              <Link key={i} href={item.href}>
                {item.title}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center space-x-3">
          <ModeToggle />
          <div className="flex items-center">
            <select
              id="locale"
              name="locale"
              className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
            >
              <option>EN</option>
              <option>FR</option>
              <option>AR</option>
            </select>
          </div>
          <Button>
            <Link href="https://coding-school-typescript.vercel.app/courses/next">
              Explore Course
            </Link>
          </Button>
        </div>
      </header>
    </div>
  );
}
