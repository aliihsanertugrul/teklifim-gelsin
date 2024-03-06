"use client"
import {useState} from 'react'
import {getRandomFact} from "@/services/get-random-fact-service"

const Random = ({text,lang}) => {
  const [randomText,setRandomText] = useState(text)
  const [loading,setLoading] = useState(false)
  
 const handleClick =async () =>{
  setLoading(true)
  const random = await getRandomFact(lang)    
  const randomResponse = await random.json()
  setRandomText(randomResponse.text)
  setLoading(false)
 }
  
  return (
    <>
    
    {!loading ? <p>{randomText}</p> : "SkeletonLoading"}
    <button className='btn btn-primary ' onClick={handleClick} >Random</button>
    </>
  )
}

export default Random