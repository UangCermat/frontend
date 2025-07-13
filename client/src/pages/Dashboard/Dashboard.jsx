import { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const Dashboard = () => {
  const data = [
    { name: 'Jan', income: 4000, expense: 2400, balance: 1600 },
    { name: 'Feb', income: 3000, expense: 1398, balance: 1602 },
    { name: 'Mar', income: 2000, expense: 9800, balance: -7800 },
    { name: 'Apr', income: 2780, expense: 3908, balance: -1128 },
    { name: 'May', income: 1890, expense: 4800, balance: -2910 },
    { name: 'Jun', income: 2390, expense: 3800, balance: -1410 },
  ];

  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await http.get('/api/transactions');
    }
  })

  return (
    <>
      <section className="space-y-4 p-4">
        <h1 className="text-xl font-bold">Dashboard</h1>
        <div className="bg-white shadow-xl shadow-blue-100 rounded-lg p-6 flex space-x-24">
          <div className="flex space-x-4 items-center">
            <p>logo</p>
            <div>
              <h2>Total Income</h2>
              <h1 className="text-md font-bold">RP X.XXX.XXX</h1>
            </div>
          </div>
          <div className="flex space-x-4 items-center">
            <p>logo</p>
            <div>
              <h2>Total Expense</h2>
              <h1 className="text-md font-bold">RP X.XXX.XXX</h1>
            </div>
          </div>
          <div className="flex space-x-4 items-center">
            <p>logo</p>
            <div>
              <h2>Total Balance</h2>
              <h1 className="text-md font-bold">RP X.XXX.XXX</h1>
            </div>
          </div>
          <div className="flex space-x-4 items-center">
            <p>logo</p>
            <div>
              <h2>Goal Progress</h2>
              <h1 className="text-md font-bold">RP X.XXX.XXX</h1>
            </div>
          </div>
        </div>
      </section>

      <section className='space-y-4 p-4'>
        <h1 className='text-xl font-bold'>Transaction History</h1>
        <div className="bg-white shadow-xl shadow-blue-100 rounded-lg p-4 pt-6">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="income" stroke="#8884d8" strokeWidth={2} />
              <Line type="monotone" dataKey="expense" stroke="#82ca9d" strokeWidth={2} />
              <Line type="monotone" dataKey="balance" stroke="#ffc658" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>
    </>

  )
}

export default Dashboard