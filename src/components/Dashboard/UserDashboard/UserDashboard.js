import { Button, Grid, Paper, Typography, Box } from '@mui/material';
import React from 'react';
import useProducts from '../../../hooks/useProducts';
import { NavLink, useRouteMatch } from 'react-router-dom';
import useNews from '../../../hooks/useNews';
import useManageOrder from '../../../hooks/useManageOrder';
import useAuth from '../../../hooks/useAuth';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PaymentIcon from '@mui/icons-material/Payment';
import RateReviewIcon from '@mui/icons-material/RateReview';

const UserDashboard = () => {
    const [products] = useProducts();
    const [newses] = useNews();
    let { url } = useRouteMatch();
    const [orders] = useManageOrder();
    const { user, admin } = useAuth();


    return (
        <div>
            {/* some user functionality show in user dashboard home page using paper */}
            {
                user?.email && admin ? <Box>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                            <Paper elevation={3} sx={{ p: 2 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={5} md={3}>
                                        <ProductionQuantityLimitsIcon style={{ color: 'yellow', fontSize: '50px' }} />
                                    </Grid>
                                    <Grid item xs={7} md={9}>
                                        <Typography variant="body1" gutterBottom component="div" sx={{ fontWeight: 'bold' }}>
                                            Total Products {products.length}
                                        </Typography>
                                        <NavLink style={{ textDecoration: 'none' }} to={`${url}/addproduct`}><Button color="inherit">Add New</Button></NavLink>

                                        <NavLink style={{ textDecoration: 'none' }} to={`${url}/manageporducts`}><Button color="inherit">Manage</Button></NavLink>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Paper elevation={3} sx={{ p: 2 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={5} md={3}>
                                        <AnnouncementIcon style={{ color: 'green', fontSize: '50px' }} />
                                    </Grid>
                                    <Grid item xs={7} md={9}>
                                        <Typography variant="body1" gutterBottom component="div" sx={{ fontWeight: 'bold' }}>
                                            Total News {newses.length}
                                        </Typography>
                                        <NavLink style={{ textDecoration: 'none' }} to={`${url}/addNews`}><Button color="inherit">Add New</Button></NavLink>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <Paper elevation={3} sx={{ p: 2 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={5} md={3}>
                                        <FavoriteBorderIcon style={{ color: 'red', fontSize: '50px' }} />
                                    </Grid>
                                    <Grid item xs={7} md={9}>
                                        <Typography variant="body1" gutterBottom component="div" sx={{ fontWeight: 'bold' }}>
                                            Total Orders {orders.length}
                                        </Typography>
                                        <NavLink style={{ textDecoration: 'none' }} to={`${url}/manageOrder`}><Button color="inherit">Manage Order</Button></NavLink>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                </Box> : <Box>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                            <Paper elevation={3} sx={{ p: 2 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={5} md={3}>
                                        <PaymentIcon style={{ color: 'yellowgreen', fontSize: '50px' }} />
                                    </Grid>
                                    <Grid item xs={7} md={9}>
                                        <Typography variant="body1" gutterBottom component="div" sx={{ fontWeight: 'bold' }}>
                                            Payment Option
                                        </Typography>
                                        <NavLink style={{ textDecoration: 'none' }} to={`${url}/payments`}><Button color="inherit">Payments</Button></NavLink>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Paper elevation={3} sx={{ p: 2 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={5} md={3}>
                                        <FavoriteBorderIcon style={{ color: 'red', fontSize: '50px' }} />
                                    </Grid>
                                    <Grid item xs={7} md={9}>
                                        <Typography variant="body1" gutterBottom component="div" sx={{ fontWeight: 'bold' }}>
                                            My Order
                                        </Typography>
                                        <NavLink style={{ textDecoration: 'none' }} to={`${url}/myorders/${user.email}`}><Button color="inherit">Manage</Button></NavLink>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Paper elevation={3} sx={{ p: 2 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={5} md={3}>
                                        <RateReviewIcon style={{ color: 'gold', fontSize: '50px' }} />
                                    </Grid>
                                    <Grid item xs={7} md={9}>
                                        <Typography variant="body1" gutterBottom component="div" sx={{ fontWeight: 'bold' }}>
                                            Create Review
                                        </Typography>
                                        <NavLink style={{ textDecoration: 'none' }} to={`${url}/createReview`}><Button color="inherit">Create Review</Button></NavLink>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                </Box>
            }

        </div>
    );
};

export default UserDashboard;