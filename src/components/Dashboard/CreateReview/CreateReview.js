import { Button, TextField, Typography } from '@mui/material';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { Box } from '@mui/system';
import React, { useState } from 'react';

const CreateReview = () => {

    const [reviewer, setReviewer] = useState('');
    const [designation, setDesignation] = useState('');
    const [reviewDesc, setReviewDesc] = useState('');
    const [ratting, setRatting] = useState('');
    const handleName = e => {
        const value = e.target.value;
        setReviewer(value);
    }
    const handleDesignation = e => {
        const value = e.target.value;
        setDesignation(value);
    }
    const handleDesc = e => {
        const value = e.target.value;
        setReviewDesc(value);
    }
    const handleRatting = e => {
        const value = e.target.value;
        setRatting(value);
    }

    const handleReview = e => {

        const reviewData = { reviewer, designation, reviewDesc, ratting }
        fetch('http://localhost:7000/makeReview', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Review Create Successfully');
                    e.target.reset();
                }
            })
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleReview}>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Typography variant="h4" gutterBottom component="div">
                        Create Review
                    </Typography>
                    <TextField
                        sx={{ width: '75%', m: 2, }}
                        label="Enter Your name"
                        type="text"
                        variant="filled"
                        size="small"
                        name="name"
                        onBlur={handleName}
                    />
                    <TextField
                        sx={{ width: '75%', m: 2, }}
                        label="Enter Your Designation and Company"
                        variant="filled"
                        size="small"
                        name="designation"
                        type="text"
                        onBlur={handleDesignation}
                    />
                    {/* <TextField
                        sx={{ width: '75%', m: 2, }}
                        label="Short description"
                        variant="filled"
                        size="small"
                        name="desc"
                        type="text"
                        onBlur={handleDesc}
                    /> */}
                    <TextareaAutosize
                        aria-label="minimum height"
                        minRows={3}
                        placeholder="Enter short description"
                        style={{ width: '75%' }}
                        type="text"
                        onBlur={handleDesc}
                    />
                    <TextField
                        sx={{ width: '75%', m: 2, }}
                        label="Ratting input 0-5 any number"
                        variant="filled"
                        size="small"
                        name="ratting"
                        type="number"
                        onBlur={handleRatting}
                    />
                    <Button sx={{ width: '25%', bgcolor: '#ff9933', fontWeight: 'bold' }} type="submit" variant="contained" >Create</Button>

                </Box>
            </form>
        </div>
    );
};

export default CreateReview;