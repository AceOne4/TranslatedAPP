import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="bg-blue-50 dark:bg-blue-900 grid grid-cols-1 lg:grid-cols-2 gap-8  rounded-lg overflow-hidden items-center">
      <div className="p-8">
        <h2 className="text-4xl font-extrabold tracking-tight lg:text-5xl ">
          Access the Best Next JS Fullstack Course on Internet by JB
        </h2>
        <p className="py-6">
          Learn how to build Fullstack Production ready applications with
          Next.js and typescript, From auth to production, we build together a 3
          systems in 1 app that you can use for your own projects. Get access to
          the course for only $100.
        </p>
        <Button>
          <Link href="https://coding-school-typescript.vercel.app/courses/next#pricing">
            Enroll Now
          </Link>
        </Button>
      </div>
      <div className="">
        <Image
          src={"/jb.jpg"}
          alt="image of a man"
          width={826}
          height={541}
          className=""
        />
      </div>
    </div>
  );
}
