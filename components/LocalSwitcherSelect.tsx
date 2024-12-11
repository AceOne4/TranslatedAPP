"use client";
import React from "react";
import LocalSwitcher from "./LocalSwitcher";
import { useLocale, useTranslations } from "next-intl";
import { routing } from "../app/i18n/routing";
import { useParams } from "next/navigation";

function LocalSwitcherSelect() {
  const { locale } = useParams();
  console.log(locale);

  return (
    <LocalSwitcher defaultValue={locale as string}>
      {routing.locales.map((cur) => (
        <option key={cur} value={cur} selected={cur === locale}>
          {cur}
        </option>
      ))}
    </LocalSwitcher>
  );
}

export default LocalSwitcherSelect;
