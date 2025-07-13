import { Outlet, useNavigate } from 'react-router'
import './Layout.css'
import { use, useEffect } from 'react';

const PublicLayout = () => {
    const navigate = useNavigate();
    const accessToken = localStorage.getItem('access_token');

    useEffect(() => {
        if (accessToken) {
            navigate('/dashboard');
        }
    }, [])

    return (
        <div>
            <Outlet />
        </div>
    )
}

export default PublicLayout
