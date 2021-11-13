import { Button, TextField, Typography } from '@mui/material';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { Box } from '@mui/system';
import React, { useState } from 'react';

const AddProduct = () => {

    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [img, setImg] = useState('');
    const [price, setPrice] = useState('');

    // take all input info from input field and store in state
    const handleName = e => {
        const value = e.target.value;
        setName(value);
    }
    const handleDesc = e => {
        const value = e.target.value;
        setDesc(value);
    }
    const handleImg = e => {
        const value = e.target.value;
        setImg(value);
    }
    const handlePrice = e => {
        const value = e.target.value;
        setPrice(value);
    }
    // function for submit handle request
    const handleAddProduct = e => {
        const reviewData = { name, img, desc, price }
        fetch('http://localhost:7000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Product Added Successfully');
                    e.target.reset();
                }
            })
        e.preventDefault();
    }
    return (
        <div>
            {/* Form for create a new product */}
            <form onSubmit={handleAddProduct}>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Typography variant="h4" gutterBottom component="div">
                        Create A New Product
                    </Typography>
                    <TextField
                        sx={{ width: '75%', m: 2, }}
                        label="Enter product name"
                        type="text"
                        variant="filled"
                        size="small"
                        name="name"
                        onBlur={handleName}
                    />
                    {/* <TextField
                        sx={{ width: '75%', m: 2, }}
                        label="Enter Your Designation and Company"
                        variant="filled"
                        size="small"
                        name="desc"
                        type="text"
                        onBlur={handleDesignation}
                    /> */}
                    <TextField
                        sx={{ width: '75%', m: 2, }}
                        label="Image link"
                        variant="filled"
                        size="small"
                        name="img"
                        type="url"
                        onBlur={handleImg}
                    />
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
                        label="Product Price"
                        variant="filled"
                        size="small"
                        name="price"
                        type="number"
                        onBlur={handlePrice}
                    />
                    <Button sx={{ width: '25%', bgcolor: '#ff9933', fontWeight: 'bold' }} type="submit" variant="contained" >Create</Button>

                </Box>
            </form>
        </div>
    );
};

export default AddProduct;