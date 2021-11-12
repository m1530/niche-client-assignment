import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import useAuth from '../../hooks/useAuth';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import Payments from './Payments/Payments';
import MyOrder from './MyOrder/MyOrder';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import AdminRoute from '../Login/AdminRoute/AdminRoute';
import UserDashboard from './UserDashboard/UserDashboard';
import CreateReview from './CreateReview/CreateReview';



const drawerWidth = 240;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { logout, user, admin } = useAuth();
    let { path, url } = useRouteMatch();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <Box style={{ display: 'flex', flexDirection: 'column', marginLeft: '16px' }}>

                <Link to={`${url}`}><Button color="inherit">Dashboard</Button></Link>

                <Link style={{ textDecoration: 'none' }} style={{ textDecoration: 'none' }} to="/products"><Button color="inherit">Purchase</Button></Link>
                <Link style={{ textDecoration: 'none' }} to='/'><Button color="inherit">Home</Button></Link>

                <Link style={{ textDecoration: 'none' }} to={`${url}/payments`}><Button color="inherit">Payments</Button></Link>
                <Link style={{ textDecoration: 'none' }} to={`${url}/myorders/${user.email}`}><Button color="inherit">My orders</Button></Link>
                <Link style={{ textDecoration: 'none' }} to={`${url}/createReview`}><Button color="inherit">Create Review</Button></Link>
                {
                    admin && <Box style={{ display: 'flex', flexDirection: 'column' }}>
                        <Link style={{ textDecoration: 'none' }} to={`${url}/adminMake`}><Button color="inherit">Make Admin</Button></Link>
                        <Link style={{ textDecoration: 'none' }} to='/'><Button color="inherit">Add Doctor</Button></Link>
                    </Box>
                }
                <Button style={{ color: 'blue', width: '50%' }} size="small" onClick={logout}>Logout</Button>

            </Box>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Responsive drawer
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <Switch>
                    <Route exact path={path}>
                        <UserDashboard></UserDashboard>
                    </Route>
                    <Route path={`${path}/payments`}>
                        <Payments></Payments>
                    </Route>
                    <Route path={`${path}/myorders/:orderId`}>
                        <MyOrder></MyOrder>
                    </Route>
                    <Route path={`${path}/createReview`}>
                        <CreateReview></CreateReview>
                    </Route>
                    <AdminRoute path={`${path}/adminMake`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                </Switch>

            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
