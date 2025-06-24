import React, { useState } from 'react';
import axios from 'axios';
import './Subjects.css';

function Subjects({ department }) {
    const [search, setSearch] = useState('');
    const [subject, setSubject] = useState(null);
    const [error, setError] = useState('');

    const handleSearch = async (e) => {
        e.preventDefault();
        setError('');
        setSubject(null);
        try {
            const res = await axios.get(`http://localhost:3000/files/${search}`);
            setSubject(res.data);
        } catch (err) {
            setError('Subject not found');
        }
    };

    const handleDownload = async (subject) => {
        try {

            window.open(`http://localhost:3000/file/${subject[0]._id}`, '_blank');
            setSubject(res.data);
        } catch (err) {
            setError('Subject not found');
        }
    };


    return (
        <div className='subjects-container'>
            <h1 className='subjects-title'>eduArchive</h1>
            <p className='subjects-tagline'>Find your desired paper here</p>
            <form onSubmit={handleSearch}>
                <input
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    placeholder="Enter subject code (e.g. ECA, PPS)"
                    className='subjects-input'
                />
                <button type="submit" className='subjects-button'>Search</button>
            </form>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            {subject && (
                <div className='subjects-details'>
                    <h2>
                        {subject[0].metadata?.subject || "Unknown Subject"}
                    </h2>
                    <button
                        className="subjects-button-download"
                        onClick={() => handleDownload(subject)}>
                        Download
                    </button>
                </div>
            )}
        </div>
    )
}

export default Subjects;
