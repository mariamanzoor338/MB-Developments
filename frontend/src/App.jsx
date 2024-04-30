import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ServicePage from "./pages/ServicePage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";
import Dashboard from "./pages/admin/Dashboard";
import Heroes from "./pages/admin/Heroes";
import Careers from "./pages/admin/Careers";
import Login from "./pages/admin/Login";
import { Toaster } from "react-hot-toast";
import { UserProvider } from "./context/UserContext";
import PrivateRoute from "./utils/PrivateRoute";
import CareersPage from "./pages/CareersPage";

function App() {
    return (
        <UserProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/services" element={<ServicePage />} />
                    <Route path="/about-us" element={<AboutUsPage />} />
                    <Route path="/contact-us" element={<ContactUsPage />} />
                    <Route path="/careers" element={<CareersPage />} />
                    <Route
                        path="/admin"
                        element={
                            <PrivateRoute>
                                <Dashboard />
                            </PrivateRoute>
                        }
                    >
                        <Route path="/admin/heros" element={<Heroes />} />
                        <Route path="careers" element={<Careers />} />
                    </Route>
                    <Route path="/admin-login" element={<Login />} />
                </Routes>
                <Toaster
                    position="top-right"
                    toastOptions={{
                        success: {
                            duration: 3000,
                        },
                        error: {
                            duration: 5000,
                        },
                        style: {
                            fontSize: "16px",
                            maxWidth: "800px",
                            padding: "10px 24px",
                        },
                    }}
                />
            </BrowserRouter>
        </UserProvider>
    );
}

export default App;
