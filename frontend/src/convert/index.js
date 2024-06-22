import React, { useState } from 'react'
import NavHeader from '../components/NavHeader'
import { Input } from '../auth/components/input'
import Button from '../home/components/button'
import axios from 'axios';

export default function Convert() {

    const [file, setFile] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false); // New state for loading indicator
    const [extractedTextFile, setExtractedTextFile] = useState(null);


    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
        setError("")
    };

    const handleUpload = async () => {

        if (!file) {
            setError('Please select a file to upload.');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        setLoading(true); // Set loading to true while fetching data

        try {
            const response = await axios.post('http://localhost:8082/convert', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            const { extracted_text_file } = response.data;
            setExtractedTextFile(extracted_text_file);
            setError('');
        } catch (error) {
            setError('Error uploading file. Please try again.');
            console.error('Error uploading file:', error);
        } finally {
            setLoading(false); // Set loading back to false after fetch is complete
        }
    };

    const handleDownload = async () => {
        try {
            const response = await axios.get(`http://localhost:8082/download/${extractedTextFile}`, {
                responseType: 'blob',
            });

            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', extractedTextFile.split('/').pop());
            document.body.appendChild(link);
            link.click();
            link.remove();
        } catch (error) {
            console.error('Error downloading file:', error);
            alert('Failed to download file');
        }
    };

    return (
        <div>
            <div className="bg-secondary py-3 pr-[6%] shadow-xl">
                <NavHeader />
            </div>
            <div className="flex justify-center pt-10 gap-10 flex-wrap">
                <div className="flex flex-col gap-10 items-center" >
                    <h1 className="text-title">
                        Extraire les textes
                    </h1>
                    <div className="flex gap-5">
                        <Input type="file" className="w-96" onChange={handleFileChange}  />
                        <Button text="Envoyer" order="primary" onClick={handleUpload} />
                    </div>
                    <div className="p-10 border border-primary flex justify-start items-start flex-1 w-[60%] min-w-[60%] overflow-scroll">
                        {loading && <p className="text-secondary w-[60%]">Loading...</p>}
                        {error && <p className="text-red-600 w-[60%]">{error}</p>}
                        {extractedTextFile && (
                            <div className="flex flex-col gap-5 justify-center items-center">
                                <h2 >Le fichier a été converti en *.txt</h2>
                                <Button onClick={handleDownload} text="Télécharger"/>
                            </div>
                        )}
                    </div>
                </div>
            </div>

        </div>
    )
}
