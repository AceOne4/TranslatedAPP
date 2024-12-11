import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations();

  return (
    <div className="bg-blue-50 dark:bg-blue-900 grid grid-cols-1 lg:grid-cols-2 gap-8 rounded-lg overflow-hidden items-center">
      <div className="p-8">
        <h2 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          {t("HomePage.Hero.title")}
        </h2>
        <p className="py-6">{t("HomePage.Hero.description")}</p>
        <Button>
          <Link href="https://coding-school-typescript.vercel.app/courses/next#pricing">
            {t("HomePage.Hero.enrollNow")}
          </Link>
        </Button>
      </div>
      <div className="">
        <Image
          src={"/jb.jpg"}
          alt="image d'un homme"
          width={826}
          height={541}
          className=""
        />
      </div>
    </div>
  );
}
