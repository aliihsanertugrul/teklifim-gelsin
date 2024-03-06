const TODAY_URL=process.env.NEXT_PUBLIC_BASE_URL_TODAY 

export const getTodayFact=async(lang)=>{
    return await fetch(`${TODAY_URL}?language=${lang}`)
}