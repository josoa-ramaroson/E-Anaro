import React, { useContext, useState } from 'react'

import NavHeader from '../components/NavHeader'
import { Input } from '../auth/components/input';
import Button from '../chat/components/button';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../layout/authContext';
import axios from 'axios';


const API_URL = 'http://localhost:8082';


export default function Create() {


    const [titre, setTitre] = useState('');
    const [niveau, setNiveau] = useState('');

    const [isLoading, setIsLoading] = useState(false);

    const { token, setToken } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (titre.trim() == "" && niveau.trim() == "") return;
        setIsLoading(true);
        try {
            const response = await axios.post(`${API_URL}/create`, { titre, niveau });
        
            // Redirect to /home after successful login
            // navigate('/cours');
        } catch (error) {
            console.error('Login error:', error);
        } finally {
            setIsLoading(false)
        }
    };
    return (
        <div>
            <div className="bg-secondary py-3 pr-[6%] shadow-xl">
                <NavHeader />
            </div>

            <div className="flex w-screen h-screen"
            >
                <div className="flex-1 p-24 ">
                    <h1 className="text-5xl text-secondary">Personnaliser votre cours grâces à l'<span className="text-primary">IA</span></h1>
                </div>
                <div className="flex-1  text-white flex flex-col justify-center gap-6 p-20">
                    <h1 className="text-title text-secondary ">Créer un nouveau cours</h1>
                    <h3 className="text-secondary">Remplir les informations ci-dessous</h3>
                    <div className="flex flex-col gap-8 w-[80%]">
                        <div className="w-90 flex flex-col  gap-5 justify-center ">

                            <Input placeholder="Titre" type="text" onChange={(e) => setTitre(e.target.value)} />
                            <Input placeholder="niveau" type="text" onChange={(e) => setNiveau(e.target.value)} />
                        </div>
                       
                        <div>
                            <Button order="primary" text="Créer" className="align-middle" onClick={handleSubmit} />
                            {isLoading && <p className="text-primary">Creating Course...</p>}
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>

    )

}
