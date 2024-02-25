import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import {RouterProvider,createBrowserRouter } from "react-router-dom"
import Createpost, { createPostAction } from './component/Createpost.jsx';
import PostList, { postLoader } from './component/PostList.jsx';

   const router = createBrowserRouter([
    
    {path : "/", element : <App/>, children:[
      {path: "/", element: <PostList/> , loader : postLoader},
      {path: "/create-post", element: <Createpost/>, action: createPostAction}
    ]},
   
    
   ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
    
  </React.StrictMode>,
)
