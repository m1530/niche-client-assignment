import * as React from 'react';
import { useParams } from "react-router-dom";
import { Box } from '@mui/system';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
// import './MyOrder.css';



const MyOrder = () => {
    let { orderId } = useParams();
    let i = 1;

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
            {/* load My order like list */}
            {
                myOrder.map(row => (
                    < List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }
                    }>
                        <ListItem alignItems="flex-start">
                            <ListItemText
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: 'inline', marginRight: '10px' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            {i++}.
                                        </Typography>
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