import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAuth from '../../../hooks/useAuth';
import { Button, Grid, TablePagination } from '@mui/material';
import { useParams } from "react-router-dom";
import { Box } from '@mui/system';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
// import './MyOrder.css';



const MyOrder = () => {

    const { user } = useAuth();
    let { orderId } = useParams();

    const [myOrder, setMyOrder] = React.useState([]);

    // fetch my order
    React.useEffect(() => {
        const url = `http://localhost:7000/myorders/${orderId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMyOrder(data));
    }, [orderId]);

    console.log(orderId);

    const handlePackegeDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `http://localhost:7000/order/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const leftOrder = myOrder.filter(pd => pd._id !== id);
                        setMyOrder(leftOrder);
                    }
                });
        }
    }


    // const columns = [
    //     { id: 'userName', label: 'User Name', minWidth: 170 },
    //     { id: 'email', label: 'Email', minWidth: 100 },
    //     {
    //         id: 'ProductName',
    //         label: 'Product',
    //         minWidth: 170,
    //         align: 'right',
    //         format: (value) => value.toLocaleString('en-US'),
    //     },
    //     {
    //         id: 'ProductPrice',
    //         label: 'Price',
    //         minWidth: 170,
    //         align: 'right',
    //         format: (value) => value.toLocaleString('en-US'),
    //     },
    //     {
    //         id: 'address',
    //         label: 'Address',
    //         minWidth: 170,
    //         align: 'right',
    //         format: (value) => value.toFixed(2),
    //     },
    //     {
    //         id: 'phone',
    //         label: 'Phone',
    //         minWidth: 170,
    //         align: 'right',
    //         format: (value) => value.toFixed(2),
    //     },
    //     {
    //         id: 'status',
    //         label: 'Status',
    //         minWidth: 170,
    //         align: 'right',
    //         format: (value) => value.toFixed(2),
    //     },
    //     {
    //         id: 'action',
    //         label: 'Action',
    //         minWidth: 170,
    //         align: 'right',
    //         format: (value) => value.toFixed(2),
    //     },
    // ];


    // const [page, setPage] = React.useState(0);
    // const [rowsPerPage, setRowsPerPage] = React.useState(10);

    // const handleChangePage = (event, newPage) => {
    //     setPage(newPage);
    // };

    // const handleChangeRowsPerPage = (event) => {
    //     setRowsPerPage(+event.target.value);
    //     setPage(0);
    // };

    return (
        // <TableContainer component={Paper}>
        //     <Table sx={{ minWidth: 650 }} aria-label="simple table">
        //         <TableHead>
        //             <TableRow>
        //                 <TableCell>User Name</TableCell>
        //                 <TableCell align="right">Product Name</TableCell>
        //                 <TableCell align="right">Price</TableCell>
        //                 <TableCell align="right">Address</TableCell>
        //                 <TableCell align="right">Phone</TableCell>
        //                 <TableCell align="right">Email</TableCell>
        //                 <TableCell align="right">Status</TableCell>
        //                 <TableCell align="right">Action</TableCell>
        //             </TableRow>
        //         </TableHead>
        //         <TableBody>
        //             {myOrder.map((row) => (
        //                 <TableRow
        //                     key={row._id}
        //                     sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        //                 >
        //                     <TableCell component="th" scope="row">
        //                         {row.userName}
        //                     </TableCell>
        //                     <TableCell align="right">{row.ProductName}</TableCell>
        //                     <TableCell align="right">{row.ProductPrice}</TableCell>
        //                     <TableCell align="right">{row.address}</TableCell>
        //                     <TableCell align="right">{row.phone}</TableCell>
        //                     <TableCell align="right">{row.email}</TableCell>
        //                     <TableCell align="right">{row.status}</TableCell>
        //                     <TableCell align="right"><Button size="small">Cancel</Button></TableCell>
        //                 </TableRow>
        //             ))}
        //         </TableBody>
        //     </Table>
        // </TableContainer>
        // <Box className="tableData">
        //     <h1 className="title">Material UI - Responsive Table</h1>
        //     <Paper className="container">
        //         <Table>
        //             <TableHead>
        //                 <TableRow>
        //                     <TableCell>User Name</TableCell>
        //                     <TableCell align="right">Product Name</TableCell>
        //                     <TableCell align="right">Price</TableCell>
        //                     <TableCell align="right">Address</TableCell>
        //                     <TableCell align="right">Phone</TableCell>
        //                     <TableCell align="right">Email</TableCell>
        //                     <TableCell align="right">Status</TableCell>
        //                     <TableCell align="right">Action</TableCell>
        //                 </TableRow>
        //             </TableHead>
        //             <TableBody>
        //                 {myOrder.map((row) => (
        //                     <TableRow key={row._id}>
        //                         <TableCell component="th" scope="row">
        //                             {row.userName}
        //                         </TableCell>
        //                         <TableCell align="right">{row.ProductName}</TableCell>
        //                         <TableCell align="right">{row.ProductPrice}</TableCell>
        //                         <TableCell align="right">{row.address}</TableCell>
        //                         <TableCell align="right">{row.phone}</TableCell>
        //                         <TableCell align="right">{row.email}</TableCell>
        //                         <TableCell align="right">{row.status}</TableCell>
        //                         <TableCell align="right"><Button size="small">Cancel</Button></TableCell>
        //                     </TableRow>
        //                 ))}
        //             </TableBody>
        //         </Table>
        //     </Paper>
        // </Box>
        // <Grid container spacing={2}>
        //     <Grid item xs={12} md={10}>
        //         <h2>MY all order</h2>
        //         <TableContainer component={Paper}>
        //             <Table sx={{}} aria-label="Appointments table">
        //                 <TableHead>
        //                     <TableRow>
        //                         <TableCell>Name</TableCell>
        //                         <TableCell align="right">Product</TableCell>
        //                         <TableCell align="right">Price</TableCell>
        //                         <TableCell align="right">Address</TableCell>
        //                         <TableCell align="right">Status</TableCell>
        //                         <TableCell align="right">Action</TableCell>
        //                     </TableRow>
        //                 </TableHead>
        //                 <TableBody>
        //                     {myOrder.map((row) => (
        //                         <TableRow
        //                             key={row._id}
        //                             sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        //                         >
        //                             <TableCell component="th" scope="row">
        //                                 {row.userName}
        //                             </TableCell>
        //                             <TableCell align="right">{row.ProductName}</TableCell>
        //                             <TableCell align="right">{row.ProductPrice}</TableCell>
        //                             <TableCell align="right">{row.address}</TableCell>
        //                             <TableCell align="right">{row.status}</TableCell>
        //                         </TableRow>
        //                     ))}
        //                 </TableBody>
        //             </Table>
        //         </TableContainer>
        //     </Grid>

        // </Grid>

        <Box>
            {
                myOrder.map(row => (
                    < List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }
                    }>
                        <ListItem alignItems="flex-start">
                            <ListItemText
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            {row.ProductName}
                                        </Typography>
                                        <Typography
                                            sx={{ display: 'inline', marginLeft: '5px' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            {row.ProductPrice}
                                        </Typography>
                                        <Typography
                                            sx={{ display: 'inline', marginLeft: '5px' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            {row.status}
                                        </Typography>
                                        <Button onClick={() => handlePackegeDelete(row._id)} size="small">Cancel</Button>
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                    </List >
                ))
            }

        </Box >


    );
}

export default MyOrder;