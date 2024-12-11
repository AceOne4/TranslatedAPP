import { cn } from "@/lib/utils";
import React from "react";
import { FaShoppingCart, FaRocket, FaTools, FaBook } from "react-icons/fa";
import { Button } from "./ui/button";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function WhyUs() {
  const t = useTranslations("HomePage.WhyUs");

  // Map icon indices to React Icons
  const iconMap = [FaShoppingCart, FaRocket, FaTools, FaBook];

  // Get points as an array from the JSON
  const points = [
    {
      title: t("points0-title"),
      description: t("points0-description"),
    },
    {
      title: t("points1-title"),
      description: t("points1-description"),
    },
    {
      title: t("points2-title"),
      description: t("points2-description"),
    },
    {
      title: t("points3-title"),
      description: t("points3-description"),
    },
  ];

  return (
    <div className="min-h-screen py-40 max-w-6xl mx-auto">
      <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-balance text-center py-4">
        {t("title")}
      </h2>
      <div className="py-8">
        <div className="grid grid-col-1 lg:grid-cols-2 gap-6">
          {points.map((point, i) => {
            const Icon = iconMap[i]; // Map index to the corresponding icon
            return (
              <div
                key={i}
                className="rounded-md shadow p-4 flex gap-4 dark:border-slate-600 dark:border dark:bg-slate-700"
              >
                <div
                  className={cn(
                    "w-16 h-16 rounded-lg text-gray-50 flex items-center justify-center flex-shrink-0",
                    `bg-${["purple", "pink", "orange", "teal"][i]}-800`
                  )}
                >
                  <Icon className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                    {point.title}
                  </h2>
                  <p className="pt-3">{point.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Button size={"lg"}>
          <Link href="https://coding-school-typescript.vercel.app/courses/next">
            {t("enrollNow")}
          </Link>
        </Button>
      </div>
    </div>
  );
}
