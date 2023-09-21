import { createBrowserRouter,RouterProvider } from "react-router-dom"

import Layout, {loader as DynamicLoader} from "./components/Layout"
import DynamicPage from './page/DynamicPage';
//import {loader as DynamicLoader} from './components/Layout';
import Error from './page/Error';


const routes = createBrowserRouter([
  {
    path:"/",
    element:<Layout />,
    loader:DynamicLoader,
    errorElement:<Error/>,
    children:[
      {
        path:":idType",
        element:<DynamicPage />,
        
      }
    ]
  }
])




function App() {
  

  return (
    <div className="p-44">
    <RouterProvider router={routes} />
    </div>
  )
}

export default App
