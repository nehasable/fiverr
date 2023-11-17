import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from   './pages/home/Home'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,  
} from "react-router-dom"
import Gigs from './pages/gigs/Gigs'
import Gig from './pages/gig/Gig'
import Orders from './pages/orders/Orders'
import Mygigs from './pages/mygigs/Mygigs'
import Add from './pages/add/Add'
import Messages from './pages/messages/Messages'
import Message from './pages/message/message'
function App() {
  const Layout =()=>{
return(
  <>
  <Navbar/>
  <Outlet/>  
 <Footer/>
 </>
)
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path: "/",
          element: <Home />,
        },
        {
        path: "/gigs",
      element: <Gigs/>,
        },
        {
          path: "/gig/:id",
        element: <Gig/>,
          },
          {
            path: "/orders",
          element: <Orders/>,
            },
            {
              path: "/mygigs",
            element: <Mygigs/>,
              },
              {
                path: "/add",
              element: <Add/>,
                },
                {
                  path: "/messages",
                element: <Messages/>,
                  },
                  {
                    path: "/message",
                  element: <Message/>,
                    }
      ]
    
    },
  ]);

  return (
    <>
      <div>
      <RouterProvider router={router} />
      
      </div>
      
    </>
  )
}

export default App
