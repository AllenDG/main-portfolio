import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import { MainRoutes } from '@/routes/MainRoutes';
import { ThemeProvider } from '@/theme/ThemeProvider';


const root = document.getElementById('root');
if (!root) throw new Error('Root element not found');

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <RouterProvider router={MainRoutes} />
    </ThemeProvider>
  </React.StrictMode>
);
