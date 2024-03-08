import React from "react";
import { getDictionary, i18n } from "@/dictionaries/dictionaries";
import Random from "@/components/random-fact/random";
import { getRandomFact } from "@/services/get-random-fact-service";
import { getTodayFact } from "@/services/get-today-fact-service";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import "./style.scss";

export default async function App({ params }) {
  const session = await getSession();
  if (!session && i18n.locales.some((locale) => locale === params.lang)) {
    redirect(`${params.lang}/sign-in`);
  }

  const dict = await getDictionary(params.lang);

  const random = (await getRandomFact(params.lang)).json();

  const today = (await getTodayFact(params.lang)).json();

  const [randomResponse, todayResponse] = await Promise.all([random, today]);

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center today-fact-section">
        <div className="col-12 col-md-6 today-title text-center">
          {dict.products.todayTitle}
        </div>
        <div className="col-12 col-md-6 today-text">{todayResponse.text}</div>
      </div>
      <div className="row justify-content-center align-items-center random-fact-section">
        <div className="col-12 col-md-6 random-title text-center">
          {dict.products.randomTitle}
        </div>
        <div className="col-12 col-md-6 random-text">
          <Random text={randomResponse.text} lang={params.lang} />
        </div>
      </div>
    </div>
  );
}
