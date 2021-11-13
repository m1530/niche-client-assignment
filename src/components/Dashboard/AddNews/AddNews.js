import { Button, TextField, Typography } from '@mui/material';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { Box } from '@mui/system';
import React, { useState } from 'react';

const AddNews = () => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [desc, setDesc] = useState('');
    const [img, setImg] = useState('');

    // take all input value and store in state
    const handleName = e => {
        const value = e.target.value;
        setName(value);
    }
    const handledate = e => {
        const value = e.target.value;
        setDate(value);
    }
    const handleDesc = e => {
        const value = e.target.value;
        setDesc(value);
    }
    const handleImg = e => {
        const value = e.target.value;
        setImg(value);
    }

    // handle request submit from
    const handleNews = e => {
        const newsData = { name, img, date, desc }
        fetch('https://nameless-journey-27300.herokuapp.com/addNews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newsData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('News Create Successfully');
                    e.target.reset();
                }
            })
        e.preventDefault();
    }
    return (
        <div>
            {/* create news from */}
            <form onSubmit={handleNews}>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Typography variant="h4" gutterBottom component="div">
                        Create A New News
                    </Typography>
                    <TextField
                        sx={{ width: '75%', m: 2, }}
                        label="Enter news headline"
                        type="text"
                        variant="filled"
                        size="small"
                        name="name"
                        onBlur={handleName}
                    />
                    <TextField
                        sx={{ width: '75%', m: 2, }}
                        label="Image link"
                        variant="filled"
                        size="small"
                        name="img"
                        type="url"
                        onBlur={handleImg}
                    />

                    <TextField
                        sx={{ width: '75%', m: 2, }}
                        variant="filled"
                        size="small"
                        name="date"
                        type="datetime-local"
                        onBlur={handledate}
                    />
                    <TextareaAutosize
                        aria-label="minimum height"
                        minRows={3}
                        placeholder="Enter short description"
                        style={{ width: '75%' }}
                        type="text"
                        onBlur={handleDesc}
                    />
                    <Button sx={{ width: '25%', bgcolor: '#ff9933', fontWeight: 'bold', mt: 2 }} type="submit" variant="contained" >Create</Button>

                </Box>
            </form>
        </div>
    );
};


export default AddNews;