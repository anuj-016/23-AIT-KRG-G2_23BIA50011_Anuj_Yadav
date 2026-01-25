import { Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import DashboardAnalytics from "./pages/DashboardAnalytics";
import DashboardLayout from "./pages/DashboardLayout";
import DashboardSummary from "./pages/DashboardSummary";

import ProtectedRoute from "./routes/ProtectedRoute";
import Logs from "./pages/logs";
import Header from "./components/Header";

function App() {
    return (
        <>
        <Header />
        <Routes>
            <Route path = "/Login" element = {<Login/>} />
            <Route path = "/" 
            element = {
                <ProtectedRoute>
                <DashboardLayout/>
                </ProtectedRoute>
            }>
            <Route index element = {<DashboardSummary/>}/>
            
            <Route path = "summary" element = {<DashboardSummary/>}/>
            <Route path = "analytics" element = {<DashboardAnalytics/>}/>
            </Route>
            <Route path = "/logs"
            element = {
                <ProtectedRoute>
                <Logs/>
                </ProtectedRoute>
            }>
            </Route>
        </Routes>
        </>
    )
}

export default App;