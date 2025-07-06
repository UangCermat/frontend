import { BrowserRouter, Routes, Route } from "react-router";
import Dashboard from './page/Dashboard.jsx'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
