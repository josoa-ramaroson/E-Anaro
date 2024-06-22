import React from 'react'
import { logo } from '../assests'
import Button from './button'

export default function Footer() {
    return (
        <div className="bg-secondary py-5 px-16 flex flex-col justify-center items-center">
            <div className="flex gap-5 pb-5 justify-center items-center">
                <div>
                    <img src={logo} />
                </div>
                <div>
                    <h1 className="text-white text-title-cours">Transformer l'éducation grâce à l'outils pédagogiques</h1>
                </div>
            </div>

            <div>
                <h1 className="text-white text-2xl pb-5">S'abonner pour notre NewsLetter</h1>
                <div className="flex">
                    <input type="email" placeholder='Votre email' className="bg-secondary border border-5 rounded-lg px-8 py-1 text-lg"/>
                    <Button order="primary" text="S'aboner" />
                </div>
            </div>

        </div>
    )
}
