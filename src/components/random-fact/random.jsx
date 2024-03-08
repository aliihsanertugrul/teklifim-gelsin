"use client";
import { useState } from "react";
import { getRandomFact } from "@/services/get-random-fact-service";
import Loading from "../loading/loading";


const Random = ({ text, lang }) => {
  const [randomText, setRandomText] = useState(text);
  const [loading, setLoading] = useState(false);
console.log(lang)
  const handleClick = async () => {
    setLoading(true);
    const random = await getRandomFact(lang);
    const randomResponse = await random.json();
    setRandomText(randomResponse.text);
    setLoading(false);
  };

  return (
    <>
      {!loading ? <p>{randomText}</p> : <Loading/>}
      <button className="btn btn-outline-secondary w-100" onClick={handleClick}>
        {lang==="de" ? "Zufällig" : "Random"}
      </button>
    </>
  );
};

export default Random;
