import React from 'react'
import Cours from './cours'
import { arrowRightIcon } from '../assests'

export default function GroupeDeCours({ listDeCours, titre }) {
    console.log(titre);
    return (
        <div className="pl-16 flex flex-col gap-10">
            <h1 className="text-title">{titre }</h1>
            <div className="flex gap-5 items-center">
                {listDeCours.map((donnee, index) => <Cours donnee={donnee}  />)}
                <div>
                <a href="/cours" ><img className="bg-gray-300 p-4 rounded-full" src={arrowRightIcon}/></a>
                </div>
            </div>
        </div>
    )
}
