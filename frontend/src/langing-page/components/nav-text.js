import React from 'react'
import { Link } from 'react-router-dom'

export default function NavText({text, href}) {
  return (
    <div className="text-white cursor-pointer hover:text-primary transition-colors ">
        <Link className='w-full h-full' to={href}>
            {text}
        </Link>
    </div>
  )
}
