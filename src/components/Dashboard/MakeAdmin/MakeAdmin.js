import React, { useState } from 'react';
import { Button, TextField, Alert } from '@mui/material';
import { Box } from '@mui/system';

const MakeAdmin = () => {

    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    // submit request for making admin
    const handleMakeAdmin = e => {
        const user = { email };
        fetch('http://localhost:7000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true);
                }
            })

        e.preventDefault()
    }

    return (
        <div>
            <h2>Make an Admin</h2>
            {/* make admin form */}
            <form onSubmit={handleMakeAdmin}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <TextField
                        sx={{ width: '65%' }}
                        label="Enter Email address"
                        type="email"
                        size="small"
                        onBlur={handleOnBlur}
                        variant="standard" />
                    <Button type="submit" variant="contained" size="small" sx={{ bgcolor: 'info' }}>Make Admin</Button>
                </Box>
            </form>
            {success && <Alert severity="success">Admin Make Successfully</Alert>}
        </div>
    );
};

export default MakeAdmin;