import React, { useState } from 'react'
import Button from '../chat/components/button'
import { Input } from '../auth/components/input'
import axios from 'axios';
import NavHeader from '../components/NavHeader'



export default function Home() {

    const [file, setFile] = useState(null);
    const [summary, setSummary] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false); // New state for loading indicator

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
        setError("")
    };

    const handleUpload = async () => {

        setSummary("")

        if (!file) {
            setError('Please select a file to upload.');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        setLoading(true); // Set loading to true while fetching data

        try {
            const response = await axios.post('http://localhost:8082/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            setSummary(response.data.summary);
            setError('');
        } catch (error) {
            setError('Error uploading file. Please try again.');
            console.error('Error uploading file:', error);
        } finally {
            setLoading(false); // Set loading back to false after fetch is complete
        }
    };

    return (
        <div>
            <div className="bg-secondary py-3 pr-[6%] shadow-xl">
            <NavHeader />
            </div>
            <div className="flex justify-center gap-10 h-screen-50 ">
                <div className="flex flex-col gap-10 items-center" >
                    <h1 className="text-title">
                        Resumer vos textes ici
                    </h1>
                    <div className="flex gap-5">
                        <Input type="file" className="w-96" onChange={handleFileChange} />
                        <Button text="Envoyer" order="primary" onClick={handleUpload} />
                    </div>
                    <div className="p-10 border border-primary flex justify-start items-start flex-1 w-[60%] min-w-[60%] overflow-scroll">
                        {loading && <p className="text-secondary w-[60%]">Loading...</p>}
                        {error && <p className="text-red-600 w-[60%]">{error}</p>}
                        {summary && !loading && <p className="text-secondary w-full">{summary}</p>}
                    </div>
                </div>
            </div>

        </div>
    )
}
