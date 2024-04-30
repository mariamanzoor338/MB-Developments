import { Navigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

export default function PrivateRoute({ children }) {
    const { token } = useUser();
    if (token === null) {
        return <Navigate to="/" />;
    }
    return children;
}
