import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import Home from './pages/Home';
import PostList, { postLoader } from './pages/PostList';
import PostComments from './pages/PostComments';
import Error from './components/Error';
import Login from './components/Login';
import SignUp from './components/SignUp';
import RequiredAuth from './components/RequiredAuth';
import Products from './pages/Products';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/auth',
        element: <Home />,
        children: [
          {
            path: 'login',
            element: <Login />,
          },
          {
            path: 'signup',
            element: <SignUp />,
          },
        ]
      },
      {
        path: '/posts',
        element: (
          <RequiredAuth>
            <PostList />
          </RequiredAuth>
        ),
        loader: postLoader,
      },
      {
        path: '/posts/:postId',
        element: <PostComments />
      },
      {
        path: '/product',
        element: <Products />
      }
    ]
  }
])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
