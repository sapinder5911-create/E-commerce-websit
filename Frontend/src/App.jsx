
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Home from "./Component/Home"
// import Shop from "./Component/Shop"
// import About from "./Component/About"
// import Nav from "./Component/Nav"
// import Register from './Component/register'
// import Login from './Component/Login'
// import Footer from './Component/footer'
// import ProductDetails from './Component/ProductDetails'
// import CheckoutPage from './Component/Checkout'
// import Admin from './Component/Admin'
// import { Toaster } from "react-hot-toast";
// // import Product from './Component/Prodectpage'
// import OrderDetails from "./Component/OderDetailPage"
// // import { useState } from 'react'
// import './App.css'
// // import { div, form, pre } from 'framer-motion/client'
// import AdminProtectedRoute from "./Component/AdminProtectedRoute";
// import AdminLayout from './Component/Adminlayout'
// import Deleteproduct from "./Component/Deletproduct"
// import UserProtectedRoute from './Component/UserProtectedRoute'
// import Showuser from './Component/Showuser'

// function App() {

//   const router = createBrowserRouter([
  
//     {
//       path: "/userorder",
//       element: <div>
//         <Nav />
//         <OrderDetails />
//       </div>
//     },
      

//     {
//       path: "/Login",
//       element: <div>
//         <Nav  />
//         <Login  />
//       </div>
//     },
//     {
//       path: "/admin",
//       element: (
//         <AdminProtectedRoute>
//           <Nav />
//           <AdminLayout />
//           <Footer />
//         </AdminProtectedRoute>
//       ),
//       children: [
//         { path: "showuser", element: <Showuser /> },
//         { path: "addproduct", element: <Admin /> },
//         { path: "deleteproduct", element: <Deleteproduct /> },
//         { path: "orders", element: <OrderDetails /> },
//       ],
//     },
    

//     {
//       path: "/register",
//       element: <div>
//         <Nav  />
//         <Register />
//       </div>
//     },

//     {
//       path: "/",
//       element: <div>
//         <Nav  />
//         <Home  />
//         <Footer />
       
//       </div>
//     },
   
//     {
//       path: "/shop",
//       element: (
//         <UserProtectedRoute>
//           <>
//             <Nav />
//             <Shop />
//             <Footer />
//           </>
//         </UserProtectedRoute>
//       ),
      
//     },
//     {
//       path: "/About",
//       element: <div>
//         <Nav  />
//         <About />
//         <Footer />
//       </div>
//     },
//     {
//       path: "/products/:id",
//       element: 
//         <>
//           <Nav  />
//           <ProductDetails  />
//           <Footer />
//         </>
        

      
//     },
// {
//     path: "/checkout/:id",
//     element: <div>
     
//       <Nav />

//       <CheckoutPage />

//     </div>
//     },
   

//  ])

//   return (
//     <div>
//       <Toaster position="top-center" reverseOrder={false} />
//     <RouterProvider router={router}/>
//     </div>
   
//   )
// }

// export default App


import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Toaster } from "react-hot-toast";
import "./App.css";

// Lazy imports
const Home = lazy(() => import("./Component/Home"));
const Shop = lazy(() => import("./Component/Shop"));
const About = lazy(() => import("./Component/About"));
const Nav = lazy(() => import("./Component/Nav"));
const Register = lazy(() => import("./Component/register"));
const Login = lazy(() => import("./Component/Login"));
const Footer = lazy(() => import("./Component/footer"));
const ProductDetails = lazy(() => import("./Component/ProductDetails"));
const CheckoutPage = lazy(() => import("./Component/Checkout"));
const Admin = lazy(() => import("./Component/Admin"));
const OrderDetails = lazy(() => import("./Component/OderDetailPage"));
const AdminProtectedRoute = lazy(() =>
  import("./Component/AdminProtectedRoute")
);
const AdminLayout = lazy(() => import("./Component/Adminlayout"));
const Deleteproduct = lazy(() => import("./Component/Deletproduct"));
const UserProtectedRoute = lazy(() =>
  import("./Component/UserProtectedRoute")
);
const Showuser = lazy(() => import("./Component/Showuser"));

function App() {
  const router = createBrowserRouter([
    {
      path: "/userorder",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <Nav />
          <OrderDetails />
        </Suspense>
      ),
    },

    {
      path: "/Login",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <Nav />
          <Login />
        </Suspense>
      ),
    },

    {
      path: "/admin",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <AdminProtectedRoute>
            <Nav />
            <AdminLayout />
            <Footer />
          </AdminProtectedRoute>
        </Suspense>
      ),
      children: [
        { path: "showuser", element: <Showuser /> },
        { path: "addproduct", element: <Admin /> },
        { path: "deleteproduct", element: <Deleteproduct /> },
        { path: "orders", element: <OrderDetails /> },
      ],
    },

    {
      path: "/register",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <Nav />
          <Register />
        </Suspense>
      ),
    },

    {
      path: "/",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <Nav />
          <Home />
          <Footer />
        </Suspense>
      ),
    },

    {
      path: "/shop",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <UserProtectedRoute>
            <>
              <Nav />
              <Shop />
              <Footer />
            </>
          </UserProtectedRoute>
        </Suspense>
      ),
    },

    {
      path: "/About",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <Nav />
          <About />
          <Footer />
        </Suspense>
      ),
    },

    {
      path: "/products/:id",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <Nav />
          <ProductDetails />
          <Footer />
        </Suspense>
      ),
    },

    {
      path: "/checkout/:id",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <Nav />
          <CheckoutPage />
        </Suspense>
      ),
    },
  ]);

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;