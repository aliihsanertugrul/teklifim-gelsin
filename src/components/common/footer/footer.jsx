import Link from 'next/link'
import React from 'react'
import "./style.scss"

const Footer = () => {
  return (
    <footer>
        <span>&copy; 2024 - Copyright by </span>
        <Link href="http://linkedin.com/in/ali-ihsan-ertugrul" target='_blank'>Ali ihsan Ertugrul</Link> 
    </footer>
  )
}

export default Footer