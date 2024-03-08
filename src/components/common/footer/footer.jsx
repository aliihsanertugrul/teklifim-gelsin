import Link from 'next/link'
import React from 'react'
import "./style.scss"
import { getDictionary } from '@/dictionaries/dictionaries'

const Footer =async ({lang}) => {
  const dict=await getDictionary(lang)
  return (
    <footer>
        <span>&copy; 2024 - {dict.products.copyright} </span>
        <Link href="http://linkedin.com/in/ali-ihsan-ertugrul" target='_blank'>Ali ihsan Ertugrul</Link> 
    </footer>
  )
}

export default Footer