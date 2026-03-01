import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard";
import WaterTracker from "./pages/WaterTracker";
import ProtectedRoute from "./routes/ProtectedRoute";
import Header from "./components/Header";

function App() {
    return (
        <>
        <Header />
        <Routes>
            <Route path = "/Login" element = {<Login/>} />
            <Route path = "/dashboard" 
            element = {
                <ProtectedRoute>
                <Dashboard/>
                </ProtectedRoute>
            }>
            <Route path = "water" element = {<WaterTracker/>}/>
            </Route>
        </Routes>
        </>
    )
}

export default App;