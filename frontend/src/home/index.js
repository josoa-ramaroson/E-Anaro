import React, { useContext } from 'react'

import { chatBotImage, createCourseImage, imageToText, logo, onlineCourseImage, resumeImage } from "./assets";
import { profile } from './assets';
import Button from './components/button';
import { Link, useNavigate } from 'react-router-dom';
import MonProgramme from './components/mon-programme';
import { AuthContext } from '../layout/authContext';
import NavHeader from '../components/NavHeader';


export default function Home() {

    const { token, setToken, logout } = useContext(AuthContext);
    const navigate = useNavigate()
    if (!token) return navigate("/")
    return (
        <div>
            <div className="bg-secondary py-3 pr-[6%] shadow-xl">
            <NavHeader />
            </div>
            <div className="flex justify-center pt-10 gap-10 flex-wrap">
                <Link to="/pdf">
                    <div className="flex flex-col items-center hover:bg-gray-300 p-5 rounded-lg">
                        <img src={resumeImage} />
                        <div>
                            <h1 className="text-title-cours">Resumer tes leçon</h1>
                        </div>
                    </div>
                </Link>
                <Link to="/chat">
                    <div className="flex flex-col items-center hover:bg-gray-300 p-5 rounded-lg">
                        <img src={chatBotImage} />
                        <div>
                            <h1 className="text-title-cours">Poser des questions</h1>
                        </div>
                    </div>
                </Link>
                <Link to="/cours">
                    <div className="flex flex-col items-center hover:bg-gray-300 p-5 rounded-lg">
                        <img src={onlineCourseImage} />
                        <div>
                            <h1 className="text-title-cours">Explorer les cours en ligne</h1>
                        </div>
                    </div>
                </Link>

                <Link to="/create">
                    <div className="flex flex-col items-center hover:bg-gray-300 p-5 rounded-lg">
                        <img src={createCourseImage} />
                        <div>
                            <h1 className="text-title-cours">Créer ton propre cours</h1>
                        </div>
                    </div>
                </Link>


                <Link to="/convert">
                    <div className="flex flex-col items-center hover:bg-gray-300 p-5 rounded-lg">
                        <img src={imageToText} />
                        <div>
                            <h1 className="text-title-cours">Convertir ton image en texte</h1>
                        </div>
                    </div>
                </Link>

            </div>

        </div>
    )
}
