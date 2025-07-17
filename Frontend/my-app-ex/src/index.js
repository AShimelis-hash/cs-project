import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter,
  RouterProvider 
} from 'react-router-dom';
import Record from "./Components/Record";
import RecordList from "./Components/RecordList";



const router = createBrowserRouter ([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <RecordList/>,
      },
    ],
  },
  {
    path: "/edit/:id",
    element:<App/>,
    children: [
      {
        path: "/edit/:id",
        element:<Record/>,
      },
    ],
  },
  {
    path: "/create",
    element: <App/>,
    children: [
      {
        path: "/create",
        element: <Record/>,
      }
    ]
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


