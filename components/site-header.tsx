"use client";
import Link from "next/link";
import React from "react";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import LocalSwitcherSelect from "./LocalSwitcherSelect";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

export default function SiteHeader() {
  const t = useTranslations("Layout.Navigation");
  const { locale } = useParams();

  const navLinks = [
    {
      title: t("courseProgram"),
      href: `/${locale}/course-program`,
    },
    {
      title: t("bootcamp"),
      href: `/${locale}/bootcamp`,
    },
    {
      title: t("community"),
      href: `/${locale}/community`,
    },
    {
      title: t("aboutUs"),
      href: `/${locale}/about`,
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
          <LocalSwitcherSelect />
          <Button>
            <Link href="https://coding-school-typescript.vercel.app/courses/next">
              {t("exploreCourse")}
            </Link>
          </Button>
        </div>
      </header>
    </div>
  );
}
