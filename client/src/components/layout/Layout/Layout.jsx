import { Outlet, useNavigate } from 'react-router'
import Sidebar from '../../Sidebar/Sidebar.jsx'
import './Layout.css'
import { useEffect, useState } from 'react';

const Layout = () => {
    const navigate = useNavigate();
    const [isChecking,  setIsChecking] = useState(true);
    
    useEffect(() => {
        const accessToken = localStorage.getItem('access_token');
        if (!accessToken) {
            navigate('/login');
        } else {
            setIsChecking(false);
        }
    }, [navigate])

    if (isChecking) {
        return <div>Loading...</div>;
    }

    return (
        <div className="layout">
            <Sidebar />
            <main className="main-content">
                <Outlet />
            </main>
        </div>
    )
}

export default Layout
