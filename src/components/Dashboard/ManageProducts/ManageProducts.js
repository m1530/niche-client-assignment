import * as React from 'react';
import useProducts from '../../../hooks/useProducts';
import './ManageProducts.css';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';



export default function ManageProducts() {
    // load product from product hook
    const [products, setProducts] = useProducts();

    // delete product handle submit
    const handleProductDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://nameless-journey-27300.herokuapp.com/products/${id}`;
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
        <table>
            <caption>Manage Products</caption>
            <thead>
                <tr>
                    <th scope="col">Product Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Image</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {products.map((row) => (<tr key={row._id}>
                    <td data-label="Product Name"> {row.name}</td>
                    <td data-label="Price">{row.price}</td>
                    <td data-label="Image"> <img src={row.img} alt="product-img" className="table-image" /></td>
                    <td data-label="Action">
                        <DeleteForeverIcon style={{ cursor: 'pointer' }} onClick={() => handleProductDelete(row._id)} />
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
        // <Box>
        //     <Container>
        //         <h1>Manage Products</h1>
        //         {/* display all product in table */}
        //         <TableContainer component={Paper} style={{ overFlowX: 'auto' }}>
        //             <Table aria-label="simple table" sx={{ width: '50%' }}>
        //                 <TableHead>
        //                     <TableRow>
        //                         <TableCell size="small">Product Name</TableCell>
        //                         <TableCell size="small" align="left">Image</TableCell>
        //                         <TableCell size="small" align="left">Action</TableCell>
        //                     </TableRow>
        //                 </TableHead>
        //                 <TableBody>
        //                     {products.map((row) => (
        //                         <TableRow
        //                             key={row._id}
        //                             sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        //                         >
        //                             <TableCell size="small" className="table-width">
        //                                 {row.name}
        //                             </TableCell>
        //                             <TableCell size="small" align="left" className="table-width">
        //                                 <img src={row.img} alt="product-img" className="table-image" />
        //                             </TableCell>
        //                             <TableCell size="small" align="left" className="table-width">
        //                                 <DeleteForeverIcon style={{ cursor: 'pointer' }} onClick={() => handleProductDelete(row._id)} />
        //                             </TableCell>
        //                         </TableRow>
        //                     ))}
        //                 </TableBody>
        //             </Table>
        //         </TableContainer>
        //     </Container>
        // </Box>
    );
}
