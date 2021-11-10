import React, { useState } from "react";
import {
    Toolbar,
    IconButton,
    Typography,
    useMediaQuery,
    useTheme,
    Container,
    AppBar,
} from "@mui/material";

import { Box } from "@mui/system";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import DrawerComponent from "./DrawerComponent";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    const [openDrawer, setOpenDrawer] = useState(true); //
    //theme instance
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Container>
            <Box elevation={0} sx={{ flexGrow: 1 }}>
                <AppBar style={{ backgroundColor: '#3366ff' }}>
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
                                    <DirectionsCarIcon sx={{ fontSize: "2.4rem", marginRight: '15px', color: 'white' }} />
                                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'white' }}>
                                        Topcar
                                    </Typography>
                                </IconButton>
                            </Box>

                            {/* Links */}
                            {matches ? (
                                <DrawerComponent
                                    openDrawer={openDrawer}
                                    setOpenDrawer={setOpenDrawer}
                                />
                            ) : (
                                <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Box>
                                        <NavLink
                                            activeStyle={{
                                                fontWeight: "bold",
                                                borderBottom: '1px solid white',
                                                color: 'white',
                                                textDecoration: 'none',
                                                marginRight: '15px',
                                            }}
                                            to="/"
                                        >
                                            FAQs
                                        </NavLink>
                                    </Box>
                                    <Box>
                                        <NavLink
                                            activeStyle={{
                                                fontWeight: "bold",
                                                borderBottom: '1px solid white',
                                                color: 'white',
                                                textDecoration: 'none',
                                                marginRight: '15px',
                                            }}
                                            to="/"
                                        >
                                            FAQs
                                        </NavLink>
                                    </Box>
                                    <Box>
                                        <NavLink
                                            activeStyle={{
                                                fontWeight: "bold",
                                                borderBottom: '1px solid white',
                                                color: 'white',
                                                textDecoration: 'none',
                                                marginRight: '15px',
                                            }}
                                            to="/"
                                        >
                                            FAQs
                                        </NavLink>
                                    </Box>
                                    <Box>
                                        <NavLink
                                            activeStyle={{
                                                fontWeight: "bold",
                                                borderBottom: '1px solid white',
                                                color: 'white',
                                                textDecoration: 'none',
                                                marginRight: '15px',
                                            }}
                                            to="/"
                                        >
                                            FAQs
                                        </NavLink>
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
            </Box>
        </Container >
    );
};


export default Navigation;