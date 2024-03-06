const RANDOM_URL=process.env.BASE_URL_RANDOM
const TODAY_URL=process.env.BASE_URL_TODAY 

export const getRandomFact=async(lang)=>{
    return await fetch(`${RANDOM_URL}?language=${lang}`)
}