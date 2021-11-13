import * as React from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import useManageOrder from '../../../hooks/useManageOrder';
import './ManageOrder.css';



export default function ManageOrder() {
    // load order from useOrder hook
    const [orders, setOrders] = useManageOrder();

    // handle status change request submit
    const handleStatusUpdate = id => {
        const status = { status: "shipped" };
        const url = `https://nameless-journey-27300.herokuapp.com/order/${id}`;
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
                    fetch(`https://nameless-journey-27300.herokuapp.com/orders`)
                        .then(res => res.json())
                        .then(data => setOrders(data))
                }
            })
    }

    // cancel order
    const handleOrderDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://nameless-journey-27300.herokuapp.com/orders/${id}`;
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

        <table>
            <caption>Manage Order</caption>
            <thead>
                <tr>
                    <th scope="col">User Name</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Address</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {orders.map((row) => (<tr key={row._id}>
                    <td data-label="User Name"> {row.userName}</td>
                    <td data-label="Product Name">{row.ProductName}</td>
                    <td data-label="Email">{row.email}</td>
                    <td data-label="Address">{row.address}</td>
                    <td data-label="Status">{row.status}</td>
                    <td data-label="Action">
                        <DeleteForeverIcon style={{ cursor: 'pointer' }} onClick={() => handleOrderDelete(row._id)} />| <AutorenewIcon style={{ cursor: 'pointer' }} onClick={() => handleStatusUpdate(row._id)} />
                    </td>
                </tr>
                ))}
            </tbody>
        </table>

    );
}
