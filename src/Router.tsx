import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import Blog from './pages/Blog';
import AdminPage from './pages/Admin/AdminPage';


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
    {
    path: '/blog',
    element: <Blog />,
  },
  {
    path: '/admin',
    element: <AdminPage />,
  },
  
]);

export function Router() {
  return <RouterProvider router={router} />;
}
