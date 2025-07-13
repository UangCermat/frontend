import { useNavigate } from "react-router";

const Sidebar = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('access_token');
        navigate('/login');
    }

    return (
        <div className="w-75 h-screen bg-white shadow-2xl flex flex-col items-start p-5 justify-between">
            <div className="space-y-4">
                <h1>SpendSens</h1>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/dashboard">Dashboard</a></li>
                    </ul>
                </nav>
            </div>
            <div>
                <button className="cursor-pointer hover:scale-105" onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )
}

export default Sidebar