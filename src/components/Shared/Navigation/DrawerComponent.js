import React from "react";
import {
    Button,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const DrawerComponent = ({ openDrawer, setOpenDrawer }) => {
    const { user, logout } = useAuth();
    return (
        <Drawer anchor="right" open={openDrawer} onClick={() => setOpenDrawer(false)}>
            <List>
                <ListItem divider button onClick={() => setOpenDrawer(false)}>
                    <ListItemIcon>
                        <ListItemText>
                            <NavLink
                                style={{
                                    marginRight: '15px', color: 'black', textDecoration: 'none'
                                }}
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: 'black',
                                    textDecoration: 'none',
                                }}
                                to="/home"
                            >
                                Home
                            </NavLink>
                        </ListItemText>
                    </ListItemIcon>
                </ListItem>
                <ListItem divider button onClick={() => setOpenDrawer(false)}>
                    <ListItemIcon>
                        <ListItemText>
                            <NavLink
                                style={{
                                    marginRight: '15px', color: 'black', textDecoration: 'none'
                                }}
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: 'black',
                                    textDecoration: 'none',
                                }}
                                to="/about"
                            >
                                About
                            </NavLink>
                        </ListItemText>
                    </ListItemIcon>
                </ListItem>
                <ListItem divider button onClick={() => setOpenDrawer(false)}>
                    <ListItemIcon>
                        <ListItemText>
                            <NavLink
                                style={{
                                    marginRight: '15px', color: 'black', textDecoration: 'none'
                                }}
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: 'black',
                                    textDecoration: 'none',
                                }}
                                to="/products"
                            >
                                Products
                            </NavLink>
                        </ListItemText>
                    </ListItemIcon>
                </ListItem>
                <ListItem divider button onClick={() => setOpenDrawer(false)}>
                    <ListItemIcon>
                        <ListItemText>
                            <NavLink
                                style={{
                                    marginRight: '15px', color: 'black', textDecoration: 'none'
                                }}
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: 'black',
                                    textDecoration: 'none',
                                }}
                                to="/review"
                            >
                                Review
                            </NavLink>
                        </ListItemText>
                    </ListItemIcon>
                </ListItem>
                <ListItem divider button onClick={() => setOpenDrawer(false)}>
                    <ListItemIcon>
                        <ListItemText>
                            <NavLink
                                style={{
                                    marginRight: '15px', color: 'black', textDecoration: 'none'
                                }}
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: 'black',
                                    textDecoration: 'none',
                                }}
                                to="/allNews"
                            >
                                Latest News
                            </NavLink>
                        </ListItemText>
                    </ListItemIcon>
                </ListItem>

                {
                    user?.email && <ListItem divider button onClick={() => setOpenDrawer(false)}>
                        <ListItemIcon>
                            <ListItemText>
                                <NavLink
                                    style={{
                                        marginRight: '15px', color: 'black', textDecoration: 'none'
                                    }}
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: 'black',
                                        textDecoration: 'none',
                                    }}
                                    to="/dashboard"
                                >
                                    Dashboard
                                </NavLink>

                            </ListItemText>
                        </ListItemIcon>
                    </ListItem>
                }

                {
                    user?.displayName && <ListItem divider button onClick={() => setOpenDrawer(false)}>
                        <ListItemIcon>
                            <ListItemText>
                                <Button style={{ color: 'black' }} size="small" >{user.displayName}</Button>

                            </ListItemText>
                        </ListItemIcon>
                    </ListItem>
                }
                <ListItem divider button onClick={() => setOpenDrawer(false)}>
                    <ListItemIcon>
                        <ListItemText>
                            {
                                user?.displayName ? <Button style={{ color: 'black' }} size="small" onClick={logout}>Logout</Button>
                                    :
                                    <NavLink to="/login" style={{ marginRight: '15px', color: 'black', textDecoration: 'none' }}
                                        activeStyle={{
                                            fontWeight: "bold",
                                            color: 'black',
                                            textDecoration: 'none',
                                        }}>
                                        Login
                                    </NavLink>
                            }
                        </ListItemText>
                    </ListItemIcon>
                </ListItem>
            </List>
        </Drawer>
    );
};

export default DrawerComponent;