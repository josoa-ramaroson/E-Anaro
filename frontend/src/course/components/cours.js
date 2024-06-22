import React from 'react'
import Button from './button'
import { useNavigate } from 'react-router-dom'

export default function Cours({ cours }) {

    const navigate = useNavigate();

    const handleVoirClick = () => {
        navigate(`/cours/${encodeURIComponent(cours.courseTitle)}`); // Encode courseTitle to handle special characters
    };
    return (
        <div className="hover:bg-gray-200 flex flex-col gap-5 justify-between h-full py-2 px-5 border-b-2 border-b-gray-300 w-screen-w-50">
            <div className="flex justify-between">
                <h1 className="text-lg font-bold capitalize">{cours.courseTitle}</h1>
                <div>
                    {
                        (cours.finis) && <div>
                            <Button text="Revoir" />
                        </div>
                    }
                    {
                        (!cours.finis) && <div className="flex gap-4">
                            <Button text="Voir" order="primary" onClick={handleVoirClick} />
                        </div>
                    }
                </div>
            </div>

        </div>
    )
}
