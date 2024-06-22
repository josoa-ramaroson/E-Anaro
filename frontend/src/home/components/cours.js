import React from 'react'
import Button from './button'

export default function Cours({ cours }) {
    return (
        <div className="hover:bg-gray-200 flex flex-col gap-5 justify-between h-full py-2 px-5 border-b-2 border-b-gray-300">
            <div className="flex justify-between">
                <h1 className="text-lg font-bold capitalize">{cours.titre}</h1>
                <div>
                    {
                        (cours.finis) && <div>
                            <Button text="Revoir"/>
                        </div>
                    }
                    {
                        (!cours.finis) && <div className="flex gap-4">
                            <Button text="Détails"  />
                            <Button text="Continuer" order="primary"/>
                        </div>
                    }
                </div>
            </div>

            {!cours.finis && (
                <div className="flex flex-col justify-stretch items-start gap-2" >

                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                            className="bg-secondary rounded-full h-full"
                            style={{ width: `${parseInt(cours.progres)}%` }}
                        ></div>
                    </div>
                    <div className="text-xs">{cours.progres}%</div>

                </div>
            )}

            {(cours.finis) && (<div></div>)}
        </div>
    )
}
