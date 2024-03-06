import React from "react";
import { getDictionary, i18n } from "@/dictionaries/dictionaries";
import Random from "@/components/random-fact/random";
import { getRandomFact } from "@/services/get-random-fact-service";
import { getTodayFact } from "@/services/get-today-fact-service";

export default async function App({ params }) {
  const dict = await getDictionary(params.lang); // en

  const random = (await getRandomFact(params.lang)).json();

  const today = (await getTodayFact(params.lang)).json();

  const [randomResponse, todayResponse] = await Promise.all([random, today]);

  return (
    <div>
      <div>
        <p>Today Response :{todayResponse.text}</p>
        {/* <h2>Random Fact</h2>
      <p>{randomResponse.text}</p> */}
      </div>
      <Random {...randomResponse} />

      <button>{dict.products.cart}</button>
    </div>
  );
}
