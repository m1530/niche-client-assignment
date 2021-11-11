import React, { useState } from "react";
import {
    Toolbar,
    IconButton,
    Typography,
    useMediaQuery,
    useTheme,
    Container,
    AppBar,
    Button,
} from "@mui/material";

import { Box } from "@mui/system";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import DrawerComponent from "./DrawerComponent";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Navigation = () => {
    const { user, logout } = useAuth();
    const [openDrawer, setOpenDrawer] = useState(true); //
    //theme instance
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Box elevation={0} sx={{ flexGrow: 1 }}>
            <AppBar position="sticky" style={{ backgroundColor: '#3366ff' }}>
                <Toolbar>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            width: "100%",
                        }}
                        component="div"
                    >
                        {/* logo */}
                        <Box>
                            <IconButton>
                                <NavLink
                                    activeStyle={{
                                        textDecoration: 'none',
                                    }}
                                    to="/"
                                >
                                    <Box sx={{
                                        display: 'flex', justifyContent: "center", alignItems: "center",
                                    }}>
                                        <DirectionsCarIcon sx={{ fontSize: "2.4rem", marginRight: '6px', color: 'white' }} />
                                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'white' }}>
                                            Topcar
                                        </Typography>
                                    </Box>
                                </NavLink>
                            </IconButton>
                        </Box>

                        {/* Links */}
                        {matches ? (
                            <DrawerComponent
                                openDrawer={openDrawer}
                                setOpenDrawer={setOpenDrawer}
                            />
                        ) : (
                            <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
                                <Box>
                                    <NavLink
                                        style={{
                                            marginRight: '15px', color: 'white', textDecoration: 'none'
                                        }}
                                        activeStyle={{
                                            fontWeight: "bold",
                                            color: 'white',
                                            textDecoration: 'none',
                                        }}
                                        to="/home"
                                    >
                                        Home
                                    </NavLink>
                                </Box>
                                <Box>
                                    <NavLink
                                        style={{
                                            marginRight: '15px', color: 'white', textDecoration: 'none'
                                        }}
                                        activeStyle={{
                                            fontWeight: "bold",
                                            color: 'white',
                                            textDecoration: 'none',
                                        }}
                                        to="/products"
                                    >
                                        Products
                                    </NavLink>
                                </Box>
                                <Box>
                                    <NavLink
                                        style={{
                                            marginRight: '15px', color: 'white', textDecoration: 'none'
                                        }}
                                        activeStyle={{
                                            fontWeight: "bold",
                                            color: 'white',
                                            textDecoration: 'none',
                                        }}
                                        to="/products"
                                    >
                                        FAQs
                                    </NavLink>
                                </Box>
                                <Box>
                                    {
                                        user?.displayName ? <Button style={{ color: 'white' }} size="small" onClick={logout}>Logout</Button>
                                            :
                                            <NavLink to="/login" style={{ marginRight: '15px', color: 'white', textDecoration: 'none' }}>Login</NavLink>
                                    }
                                </Box>

                            </Box>
                        )}

                        {/* button links */}

                        {matches && (
                            <Box>
                                <IconButton onClick={() => setOpenDrawer(true)}>
                                    <MenuIcon />
                                </IconButton>
                            </Box>
                        )}

                    </Box>
                </Toolbar>
            </AppBar>
        </Box >
    );
};


export default Navigation;