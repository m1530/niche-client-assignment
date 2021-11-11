import { Button, ButtonGroup, Container, Divider, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Footer = () => {
    return (
        <Box sx={{ flexGrow: 1, bgcolor: '#bdbdbd' }}>
            <Container>
                <Grid container spacing={8} sx={{ textAlign: 'start', mt: 5 }}>
                    <Grid item xs={12} md={3}>
                        <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold' }}>
                            Topcar
                        </Typography>
                        <Divider sx={{ width: '50%', mb: 2 }} />
                        <Typography variant="body2" component="p" sx={{ textAlign: 'start' }}>
                            Auto Care ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore agna aliquam erat . wisi enim ad minim veniam, quis tation. sit amet, consec tetuer.ipsum dolor sit amet, consectetuer.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold' }}>
                            Contact Info
                        </Typography>
                        <Divider sx={{ width: '50%', mb: 2 }} />

                        <Box>
                            <Grid container spacing={0}>
                                <Grid item xs={2}>
                                    <LocationOnIcon />
                                </Grid>
                                <Grid item xs={10}>
                                    <Typography variant="body2" sx={{ textAlign: 'start' }}>
                                        Bns center, Sector-7, Uttara, Dhaka 1230, Bangladesh
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>


                        <Box>
                            <Grid container spacing={0}>
                                <Grid item xs={2}>
                                    <MailOutlineIcon />
                                </Grid>
                                <Grid item xs={10}>
                                    <Typography variant="body2" sx={{ textAlign: 'start' }}>
                                        info@topcar.com
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>


                        <Box>
                            <Grid container spacing={0}>
                                <Grid item xs={2}>
                                    <LocalPhoneIcon />
                                </Grid>
                                <Grid item xs={10}>
                                    <Typography variant="body2" sx={{ textAlign: 'start' }}>
                                        +0141924343
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold' }}>
                            Useful Links
                        </Typography>
                        <Divider sx={{ width: '50%', mb: 2 }} />
                        <Box >
                            <Typography variant="body2" sx={{ display: 'flex', flexDirection: 'column' }}>
                                <NavLink
                                    activeStyle={{
                                        color: 'black',
                                        textDecoration: 'none',
                                        textAlign: 'start'
                                    }}
                                    to="/"
                                >
                                    FAQs
                                </NavLink>
                                <NavLink
                                    activeStyle={{
                                        color: 'black',
                                        textDecoration: 'none',
                                        textAlign: 'start'
                                    }}
                                    to="/"
                                >
                                    FAQs
                                </NavLink>
                                <NavLink
                                    activeStyle={{
                                        color: 'black',
                                        textDecoration: 'none',
                                        textAlign: 'start'
                                    }}
                                    to="/"
                                >
                                    FAQs
                                </NavLink>
                            </Typography>
                        </Box>

                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold' }}>
                            Subscribe
                        </Typography>
                        <Divider sx={{ width: '50%', mb: 2 }} />
                        <Typography variant="body2" sx={{ textAlign: 'start' }}>
                            SUBSCRIBE OUR NEWSLETTER
                        </Typography>

                        <Box >


                            <ButtonGroup disableElevation variant="contained" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <TextField id="outlined-basic" label="Subscribe" variant="outlined" sx={{ my: 2 }} size="small" />
                                <Button variant="contained" size="medium">
                                    Medium
                                </Button>
                            </ButtonGroup>
                        </Box>

                    </Grid >
                </Grid >
            </Container >
            <Divider sx={{ width: '100%', mt: 4, mb: 3 }} />
            <Container >
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="body2" sx={{ textAlign: 'start' }}>
                            &copy; 2009 car website. All Rights Reserved.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6} className="social-icon">
                        <NavLink
                            activeStyle={{
                                textDecoration: 'none',
                                color: "white",
                            }}
                            to={{ pathname: "https://www.facebook.com" }} target="_blank"
                        >
                            <FacebookIcon className="single-icon" sx={{ color: '#4267B2' }} />
                        </NavLink>
                        <NavLink
                            activeStyle={{
                                textDecoration: 'none',
                                color: "white",
                            }}
                            to={{ pathname: "https://www.facebook.com" }} target="_blank"
                        >
                            <TwitterIcon className="single-icon" sx={{ color: '#1DA1F2' }} />
                        </NavLink>
                        <NavLink
                            activeStyle={{
                                textDecoration: 'none',
                                color: "white",
                            }}
                            to={{ pathname: "https://www.facebook.com" }} target="_blank"
                        >
                            <LinkedInIcon className="single-icon" sx={{ color: '#0e76a8' }} />
                        </NavLink>
                        <NavLink
                            activeStyle={{
                                textDecoration: 'none',
                                color: "white",
                            }}
                            to={{ pathname: "https://www.facebook.com" }} target="_blank"
                        >
                            <YouTubeIcon className="single-icon" sx={{ color: '#FF0000' }} />
                        </NavLink>
                        <NavLink
                            activeStyle={{
                                textDecoration: 'none',
                                color: "white",
                            }}
                            to={{ pathname: "https://www.facebook.com" }} target="_blank"
                        >
                            <PinterestIcon className="single-icon" sx={{ color: '#E60023' }} />
                        </NavLink>

                        {/* <NavLink
                            activeStyle={{
                                textDecoration: 'none',
                                color: "white",
                            }}
                            to="#carousel"
                        >
                           
                            <KeyboardArrowUpIcon className="single-icon" sx={{ color: 'white', bgcolor: '#3333ff', borderRadius: '5px' }} />
                        </NavLink> */}
                        <a href="#carousel">
                            <KeyboardArrowUpIcon className="single-icon" sx={{ color: 'white', bgcolor: '#3333ff', borderRadius: '5px' }} /> </a>
                    </Grid>
                </Grid>
            </Container >
        </Box >
    );
};

export default Footer;