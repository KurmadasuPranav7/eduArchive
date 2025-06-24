import React from 'react';
import './App.css';
import { createBrowserRouter,Router, RouterProvider } from 'react-router-dom';
import RouteLayout from './components/RouteLayout';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import TeamSection from './components/TeamSection';
import TogetherSection from './components/TogetherSection';
import SignUpCounter from './components/SignUpCounter';
import Footer from './components/Footer';
import JoinUs from './components/JoinUs';
import Home from './components/Home';
import Login from './components/Login';
import { ClerkProvider } from '@clerk/clerk-react'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

function App() {
  const browserRouterObject = createBrowserRouter([
    {
        path:"/",
        element:<RouteLayout />,
        children:[
            {
                path:'',
                element: <Home />
            },
            {
                path:'joinus',
                element: <JoinUs />
            },
            {
                path:'login',
                element: <Login />
            },
        ]
    }
]);

  return (
    <RouterProvider router={browserRouterObject}/>
  );
}

export default App;
