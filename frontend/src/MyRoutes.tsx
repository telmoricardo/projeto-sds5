import Dashboard from 'pages/Dashboard';
import Home from 'pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function MyRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/dashboard" element={<Dashboard />} />

            </Routes>

        </BrowserRouter>
    );
}

export default MyRoutes;