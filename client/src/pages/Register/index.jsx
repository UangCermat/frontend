import { Link, useNavigate } from "react-router";
import { useState } from "react";
import http from "../../helpers/http";

const RegisterPage = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { data } = await http({
                method: 'POST',
                url: '/register',
                data: {
                    name,
                    email,
                    password
                }
            })
            console.log(data);
            navigate('/login');
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <div className="flex items-center justify-center">
                <div className="hidden md:flex md:w-1/2 h-screen bg-gray-200 relative items-center justify-center">
                    <img src="/login-image.jpg" alt="Login" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-900/90 to-blue-900/40"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
                        <h1 className="text-3xl font-bold">Welcome to SpendSens</h1>
                        <p className="text-lg font-light mt-2">Track Your Spending, Achieve Your Goals</p>
                        <p className="text-sm font-light mt-1 italic">Your journey to financial freedom starts here.</p>
                    </div>
                </div>
                <form onSubmit={handleSubmit} className="w-full md:w-1/2 h-screen bg-white flex items-center justify-center flex-col gap-4">
                    <h1 className="text-4xl font-bold text-gray-700">Register</h1>
                    <div className="flex flex-col gap-2">
                        <label className="font-bold text-gray-700">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-100 border border-gray-300 p-2 px-5 rounded"
                            placeholder="your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="font-bold text-gray-700">Email</label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            className="w-100 border border-gray-300 p-2 px-5 rounded"
                            placeholder="your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="font-bold text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="w-100 border border-gray-300 p-2 px-5 rounded"
                            placeholder="your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="bg-blue-500 text-white p-2 rounded w-100 mt-2 cursor-pointer">Register</button>
                    <p className="text-gray-500">Already have an account? <Link to="/login" className="text-blue-500">Login</Link></p>
                </form>
            </div>
        </>
    )
}

export default RegisterPage;