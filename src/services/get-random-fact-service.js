const RANDOM_URL=process.env.NEXT_PUBLIC_BASE_URL_RANDOM

export const getRandomFact=async(lang)=>{
    return await fetch(`${RANDOM_URL}?language=${lang}`)
}