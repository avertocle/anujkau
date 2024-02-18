import { Navigate } from 'react-router-dom';

const cuid = 'LogoutPage';

export default function LogoutPage() {
    console.debug(cuid, 'logout successful');
    return <Navigate to="/auth" />;
}
