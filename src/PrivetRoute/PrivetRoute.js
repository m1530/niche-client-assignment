import { CircularProgress } from '@mui/material';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

function PrivateRoute({ children, ...rest }) {
    const { user, loading } = useAuth();
    if (loading) {
        return (
            <CircularProgress />
        );
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user?.displayName ? (children) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}

export default PrivateRoute;