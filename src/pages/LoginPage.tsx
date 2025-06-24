// src/pages/LoginPage.tsx
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // ✅ Simulated JWT token (you can generate a real one using jwt.io for testing)
    const fakeToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.' +
      'eyJlbWFpbCI6ImFkbWluQGV4YW1wbGUuY29tIiwicm9sZSI6ImFkbWluIiwiZXhwIjoxODAwMDAwMDAwfQ.' +
      'DUMMY_SIGNATURE';

    // ✅ Set auth store and localStorage
    useAuthStore.getState().setToken(fakeToken);
    localStorage.setItem('auth_token', fakeToken);

    // ✅ Redirect to dashboard
    navigate('/admin/dashboard');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Admin Login</h1>
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        onClick={handleLogin}
      >
        Login as Admin (Fake)
      </button>
    </div>
  );
};

export default LoginPage;
