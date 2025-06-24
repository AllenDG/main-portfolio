// src/layouts/AdminLayout.tsx
import { Outlet, useNavigate } from "react-router-dom";
import { useAuthStore } from "@/store/useAuthStore";

const AdminLayout = () => {
  const navigate = useNavigate();
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = () => {
    logout();
    localStorage.removeItem("auth_token");
    navigate("/login");
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-6">
        <h2 className="text-lg font-bold mb-4">Admin Panel</h2>
        <nav className="space-y-2">
          <button
            onClick={() => navigate("/admin/dashboard")}
            className="block w-full text-left hover:bg-gray-800 px-2 py-1 rounded"
          >
            Dashboard
          </button>
          {/* Add more links here */}
        </nav>

        <button
          onClick={handleLogout}
          className="mt-8 w-full bg-red-600 hover:bg-red-700 px-3 py-2 rounded"
        >
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
