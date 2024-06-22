import React from 'react'

import { Link, useNavigate } from 'react-router-dom'
import { logo, profile } from '../chat/assets'
import Button from '../chat/components/button'

export default function NavHeader() {
    const navigate = useNavigate();
  return (
    
    <div className="flex justify-between pl-20  sm:items-center">
    <div>
        <Link to="/home">
            <img className=" left-0 top-0 z-10 h-8" src={logo} />
        </Link>
    </div>
    <div className="flex min-w-[40%] gap-10">
        <Link to="/pdf">
            <Button order="primary" text="PDF"  className="bg-transparent"  />
        </Link>
        <Link to="/convert">
            <Button order="primary" text="Convertir" className="bg-transparent"  />
        </Link>
        <Link to="/chat">
            <Button order="primary" text="Question"  className="bg-transparent" />
        </Link>
        <Link to="/create">
            <Button order="primary" text="Crée ton cours"  className="bg-transparent" />
        </Link>
        <Link to="/cours">
            <Button order="primary" text="Cours" className="bg-transparent" />
        </Link>
    </div>
    <div className="pr-24 flex justify-end items-center flex-wrap gap-8">
        <div className="flex justify-center items-center gap-2 cursor-pointer">
            <div className="rounded-full">
                <img src={profile} className="w-full" />
            </div>
            <div className="text-white"></div>

        </div>

        <Button text="Deconnexion" order="primary" onClick={()=> navigate('/')}/>
    </div>
</div>
  )
}
