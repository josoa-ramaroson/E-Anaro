import React, { useEffect, useState } from 'react'
import Button from '../chat/components/button'
import { Link } from 'react-router-dom'
import { logo, profile } from '../chat/assets'
import { Input } from '../auth/components/input'
import axios from 'axios';
import NavHeader from '../components/NavHeader'
import MonProgramme from './components/mon-programme'


const API_URL = 'http://127.0.0.1:8082'
export default function Course() {

    const [listeDeCours, setListeDeCours] = useState([])
    const [file, setFile] = useState(null);
    const [summary, setSummary] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false); // New state for loading indicator

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8082/cours`, "", {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }); // Replace with your actual endpoint
                setListeDeCours(response.data); // Assuming the response data is an array of courses
                setLoading(false);
            } catch (error) {
                console.error('Error fetching courses:', error);
                setLoading(false);
            }
        };

        fetchCourses();
    }, []);

    return (
        <div>
            <div className="bg-secondary py-3 pr-[6%] shadow-xl">
                <NavHeader />
            </div>
            <div className="flex justify-center gap-10 h-screen-50 ">
                <div className="flex flex-col gap-10 items-center" >
                    <MonProgramme listeDeMonCours={listeDeCours} />
                </div>
            </div>

        </div>
    )
}
