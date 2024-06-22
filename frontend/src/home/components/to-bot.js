import React from 'react'
import { Link } from 'react-router-dom'

export default function ToBot() {
    return (
        <div className="w-24 h-24 absolute bottom-10 right-10 rounded-full" >
            <Link to="/bot">
                <div className="w-full h-full rounded-full flex justify-center items-center">
                    <img  />
                </div>
            </Link>

        </div>
    )
}
