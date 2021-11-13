import * as React from 'react';
import { useParams } from "react-router-dom";
import { Box } from '@mui/system';
import { Button } from '@mui/material';
// import './MyOrder.css';



const MyOrder = () => {
    let { orderId } = useParams();

    const [myOrder, setMyOrder] = React.useState([]);

    // fetch my order using use params
    React.useEffect(() => {
        const url = `https://nameless-journey-27300.herokuapp.com/myorders/${orderId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMyOrder(data));
    }, [orderId]);

    console.log(orderId);

    // cancel any unwanted order
    const handlePackegeDelete = id => {
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
                        const leftOrder = myOrder.filter(pd => pd._id !== id);
                        setMyOrder(leftOrder);
                    }
                });
        }
    }

    return (

        <Box>
            <table>
                <caption>My Order</caption>
                <thead>
                    <tr>
                        <th scope="col">Product Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Address</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {myOrder.map((row) => (<tr key={row._id}>
                        <td data-label="Product Name">{row.ProductName}</td>
                        <td data-label="Email">{row.ProductPrice}</td>
                        <td data-label="Address">{row.address}</td>
                        <td data-label="Status">{row.status}</td>
                        <td data-label="Action">
                            <Button onClick={() => handlePackegeDelete(row._id)} size="small">Cancel</Button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>

        </Box >


    );
}

export default MyOrder;