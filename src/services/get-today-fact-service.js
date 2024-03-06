const TODAY_URL=process.env.BASE_URL_TODAY 

export const getTodayFact=async(lang)=>{
    return await fetch(`${TODAY_URL}?language=${lang}`)
}