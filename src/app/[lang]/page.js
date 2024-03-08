import React from "react";
import { getDictionary, i18n } from "@/dictionaries/dictionaries";
import Random from "@/components/random-fact/random";
import { getRandomFact } from "@/services/get-random-fact-service";
import { getTodayFact } from "@/services/get-today-fact-service";
import { redirect } from "next/navigation";
import {  getSession } from "@/lib/auth";

export default async function App({ params }) {
const session = await getSession();
if(!session && i18n.locales.some(locale => locale ===params.lang)){
  redirect(`${params.lang}/sign-in`)
}

  const dict = await getDictionary(params.lang); // en

  const random = (await getRandomFact(params.lang)).json();

  const today = (await getTodayFact(params.lang)).json();

  const [randomResponse, todayResponse] = await Promise.all([random, today]);

  return (
    <div>
      <div>
        <p>Today Response :{todayResponse.text}</p>
        
      </div>
      <Random text={randomResponse.text} lang={params.lang} />

      <button>{dict.products.cart}</button>
    </div>
  );
}
