import React from 'react'
import { clockIcon } from '../assests'

export default function Cours({ donnee }) {

  return (
    <div className="w-96 flex flex-col gap-5 cursor-pointer">
      <div>
        <img src={donnee.image} alt="" className="w-full h-52" />
      </div>
      <div className="pb-5">
        <h1 className="text-title-cours">{donnee.titre}</h1>
        <div className="w-full flex justify-between">
          <h3>{donnee.niveau}</h3>
          <div className="flex">
            <img src={clockIcon} />
            <h3>{donnee.duree}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
