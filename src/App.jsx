
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom'
import LayOut from './UI/LayOut'
import DashBoard from './Pages/DashBoard'
import Bookings from './Pages/Bookings';
import Cabins from './Pages/Cabins';
import Account from './Pages/Account';
import Settings from './Pages/Settings';
import Users from './Pages/Users';
import Login from './Pages/Login';
import PageNotFound from './Pages/PageNotFound';
import SpecBook from './components/BookingSection/SpecBook';
import ProtectedRoute from './Features/ProtectedRoute';



export default function App() {

  
  const router = createHashRouter([
    {
      element: <LayOut />, children: [

        { path: "", element: <ProtectedRoute><DashBoard /> </ProtectedRoute> },
        { path: "bookings", element: <ProtectedRoute><Bookings />  </ProtectedRoute> },
        { path: "/bookings/:id", element: <ProtectedRoute> <SpecBook />  </ProtectedRoute> },
        { path: "cabins", element: <ProtectedRoute> <Cabins />  </ProtectedRoute> },
        { path: "account", element: <ProtectedRoute><Account />  </ProtectedRoute> },
        { path: "setting", element: <ProtectedRoute><Settings /> </ProtectedRoute> },
       
        { path: "*", element: <ProtectedRoute> <PageNotFound /> </ProtectedRoute> },
        
        
      ]
    },
    { path: "login", element: <Login /> },
    { path: "user", element: <Users /> },
  ])
  return (
    <RouterProvider router={router} />
  )
}
