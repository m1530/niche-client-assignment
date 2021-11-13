import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/material';
import { Box } from '@mui/system';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import useManageOrder from '../../../hooks/useManageOrder';



export default function ManageOrder() {
    // load order from useOrder hook
    const [orders, setOrders] = useManageOrder();

    // handle status change request submit
    const handleStatusUpdate = id => {
        const status = { status: "shipped" };
        const url = `https://nameless-journey-27300.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(status)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Update Successful');
                    fetch(`https://nameless-journey-27300.herokuapp.com/order`)
                        .then(res => res.json())
                        .then(data => setOrders(data))
                }
            })
    }

    // cancel order
    const handleOrderDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://nameless-journey-27300.herokuapp.com/order/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const leftOrder = orders.filter(pd => pd._id !== id);
                        setOrders(leftOrder);
                    }
                });
        }
    }

    return (
        <Box>
            <Container>
                {/* in datatable show all order info */}
                <TableContainer component={Paper} style={{ overFlowX: 'auto' }} sx={{ width: '70%' }}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell size="small">User Name</TableCell>
                                <TableCell size="small">Product Name</TableCell>
                                <TableCell size="small" align="left">Email</TableCell>
                                <TableCell size="small" align="left">Status</TableCell>
                                <TableCell size="small" align="left">Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {orders.map((row) => (
                                <TableRow
                                    key={row._id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell size="small" className="table-width">
                                        {row.userName}
                                    </TableCell>
                                    <TableCell size="small" align="left" className="table-width">
                                        {row.ProductName}
                                    </TableCell>
                                    <TableCell size="small" align="left" className="table-width">
                                        {row.email}
                                    </TableCell>
                                    <TableCell size="small" align="left" className="table-width">
                                        {row.status}
                                    </TableCell>
                                    <TableCell size="small" align="left" className="table-width">
                                        <DeleteForeverIcon style={{ cursor: 'pointer' }} onClick={() => handleOrderDelete(row._id)} />| <AutorenewIcon style={{ cursor: 'pointer' }} onClick={() => handleStatusUpdate(row._id)} />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </Box>
    );
}
