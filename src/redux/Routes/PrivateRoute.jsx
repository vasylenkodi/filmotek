import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/selectors';


export default function PrivateRoute({
  children,
  redirectTo = '/',
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return isLoggedIn ? children : <Navigate to={redirectTo} />;
}
