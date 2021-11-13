import { CircularProgress } from '@mui/material';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import React from 'react';

function AdminRoute({ children, ...rest }) {
    const { user, admin } = useAuth();
    if (!admin) {
        return (
            <CircularProgress />
        );
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email && admin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}

export default AdminRoute;