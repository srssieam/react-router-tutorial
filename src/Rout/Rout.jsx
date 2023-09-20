import { createBrowserRouter } from "react-router-dom";
import About from "../component/About/About";
import Contact from "../component/Contact/Contact";
import Default from "../component/Default/Default";
import ErrorPage from "../component/Error page/ErrorPage";
import Home from "../component/Home/Home";
import UserDetails from "../component/UserDetails/UserDetails";
import Users from "../component/Users/Users";


const createdRoute = createBrowserRouter([
    {
      path: '/',
      element: <Home></Home>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path:'/',
          element:<Default></Default>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/contact',
          element: <Contact></Contact>
        },
        {
          path: '/users',
          loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),   //fetched data
          element: <Users></Users>
        },
        {
          path: '/user/:userId',
          loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
          element: <UserDetails></UserDetails>
        }
      ]
    }
  ])
 

export default createdRoute;