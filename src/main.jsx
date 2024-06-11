import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import ErrorPage from './components/ErrorPage.jsx';
import Shop from './components/Shop.jsx';
import Root from './components/Root.jsx';
import Review from './components/Review.jsx';
import ProductDetails from './components/ProductDetails.jsx';
import MyArrayContext from './contextAPI/MyArrayContext.jsx';
import CheckOut from './components/CheckOut';
import Bag from './components/Bag';
import MySneakers from './components/MySneakers';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root /> ,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Shop></Shop>,
       loader: () => fetch('/products.json')
      },
      {
        path: "/Review",
        element: <Review></Review>,
       loader: () => fetch('/products.json')
      },
      {
        path: "/product/:id",
        element: <ProductDetails></ProductDetails>
      },
      {
        path: "/checkout",
        element: <CheckOut />,
       loader: () => fetch('/products.json')
      },
      {
        path: "/bag",
        element: <Bag />,
      },
      {
        path: "/mysneaker",
        element: <MySneakers></MySneakers>,
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyArrayContext>

    <RouterProvider router={router} />
    </MyArrayContext>
  </React.StrictMode>,
)
