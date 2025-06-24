import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

interface Props {
  allowedRoles: string[];
  children?: React.ReactNode;
}

const ProtectedRoute = ({ allowedRoles, children }: Props) => {
  const { token, user } = useAuthStore();

  if (!token || !user) {
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(user.role || "")) {
    return <Navigate to="/" replace />;
  }

  return children || <Outlet />;
};

export default ProtectedRoute;
