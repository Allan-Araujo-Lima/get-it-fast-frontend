import { Navigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { ReactNode } from "react";

interface PrivateRouteProps {
    children: ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
    const { isAuthenticated } = useAuth();

    console.log(isAuthenticated, "isAuthenticated")

    if (!isAuthenticated) {
        //return <Navigate to="/login" replace />;
    }

    return <>{children}</>;
};

export default PrivateRoute;
