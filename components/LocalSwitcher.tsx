"use client";
import { useParams, usePathname, useRouter } from "next/navigation";
import React, { ChangeEvent, ReactNode, useTransition } from "react";

function LocalSwitcher({
  children,
  defaultValue,
}: {
  children: ReactNode;
  defaultValue: string;
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const handleLangChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;

    startTransition(() => {
      const pathSegments = pathname.split("/");
      pathSegments[1] = nextLocale; // Replace the first segment with the new language

      const newPath = pathSegments.join("/") || "/";
      router.replace(newPath); // Navigate to the new path
    });
  };
  return (
    <div className="flex items-center">
      <select
        id="locale"
        name="locale"
        className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
        onChange={handleLangChange}
        disabled={isPending}
        defaultValue={defaultValue || "en"}
      >
        {children}
      </select>
    </div>
  );
}

export default LocalSwitcher;
