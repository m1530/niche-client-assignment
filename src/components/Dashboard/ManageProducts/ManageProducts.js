import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useProducts from '../../../hooks/useProducts';
import './ManageProducts.css';
import { Container } from '@mui/material';
import { Box } from '@mui/system';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';



export default function ManageProducts() {
    // load product from product hook
    const [products, setProducts] = useProducts();

    // delete product handle submit
    const handleProductDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `http://localhost:7000/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const leftOrder = products.filter(pd => pd._id !== id);
                        setProducts(leftOrder);
                    }
                });
        }
    }

    return (
        <Box>
            <Container>
                {/* display all product in table */}
                <TableContainer component={Paper} style={{ overFlowX: 'auto' }}>
                    <Table aria-label="simple table" sx={{ width: '50%' }}>
                        <TableHead>
                            <TableRow>
                                <TableCell size="small">Product Name</TableCell>
                                <TableCell size="small" align="left">Image</TableCell>
                                <TableCell size="small" align="left">Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {products.map((row) => (
                                <TableRow
                                    key={row._id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell size="small" className="table-width">
                                        {row.name}
                                    </TableCell>
                                    <TableCell size="small" align="left" className="table-width">
                                        <img src={row.img} alt="product-img" className="table-image" />
                                    </TableCell>
                                    <TableCell size="small" align="left" className="table-width">
                                        <DeleteForeverIcon style={{ cursor: 'pointer' }} onClick={() => handleProductDelete(row._id)} />
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
