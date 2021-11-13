import * as React from 'react';
import { Box } from '@mui/system';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

const Subscribe = () => {
    let i = 1;
    const [subscribe, setSubscribe] = React.useState([]);
    React.useEffect(() => {
        fetch('https://nameless-journey-27300.herokuapp.com/subscribe')
            .then(res => res.json())
            .then(data => setSubscribe(data));
    }, []);

    // cancel any unwanted order
    const handleRemoveSubscription = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://nameless-journey-27300.herokuapp.com/subscribe/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const leftOrder = subscribe.filter(pd => pd._id !== id);
                        setSubscribe(leftOrder);
                    }
                });
        }
    }


    return (
        <Box>
            {
                subscribe.map(row => (
                    < List key={row._id} sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }
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
                                            {row.email}
                                        </Typography>

                                        <Button onClick={() => handleRemoveSubscription(row._id)} size="small">Remove</Button>
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                    </List >
                ))
            }
        </Box>
    );
};

export default Subscribe;