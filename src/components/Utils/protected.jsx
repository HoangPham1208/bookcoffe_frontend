import { Outlet, Navigate } from "react-router-dom"
import {useAuth} from "./useAuth"

export default function PrivateRoutes(){
    const auth = useAuth();
    return auth ? <Outlet /> : <Navigate to="/" />;
}