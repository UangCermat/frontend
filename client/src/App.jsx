import { BrowserRouter, Routes, Route } from "react-router";
import Dashboard from './pages/Dashboard/Dashboard.jsx'
import Layout from './components/layout/Layout/Layout.jsx'
import PublicLayout from "./components/layout/publicLayout/index.jsx";
import LoginPage from "./pages/Login/index.jsx";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/login" element={<LoginPage />} />
        </Route>
        <Route element={<Layout />}>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
