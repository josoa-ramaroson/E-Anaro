import React from "react";
import Button from "./button";
import { rightBanner } from "../assests";
import { Link } from "react-router-dom";


export default function Banner() {
    return (
        <div className="pl-[4%] pr-[6%] h-screen-92 flex items-center justify-between gap-0 w-full bg-secondary" id="accueil">
            <div className="min-w-[45%] flex flex-col gap-8">
                <div
                >
                    <h1 className="text-white text-7xl sm:text-4xl md:text-4xl font-bold leading-snug">Transformer l'éducation grâce à</h1>
                    <h1 className="text-primary  text-7xl font-bold  leading-snug">l'outils AI pédagogique</h1>
                </div>
                <div
                >
                    <h3 className="pb-10 text-white text-xl leading-relaxed">
                        Apprendre avec les intelligences artificielles<br />
                        Rapide, certain, et facile d'utilisation.
                    </h3>
                </div>
                <div
                >
                    <div className="flex gap-10">
                        <Link to="/register">
                            <Button order="primary" text="Commencer" />
                        </Link>
                        {/* <Button order="secondary" text="Voire les formations" /> */}
                    </div>
                </div>

            </div>
            <div
            >

                <div className="relative min-w-[70%] flex-1">

                    <img src={rightBanner} className="w-screen-w-40" />

                </div>
            </div>
        </div>
    );
}
