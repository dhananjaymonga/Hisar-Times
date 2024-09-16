import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './components/css/navbar.css'
import About from './components/About.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainNews from './components/main/MainNews.jsx'
import InputContextProvider from './components/context/InputContext.jsx'
const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <App />
        },
        {
            path: "/:N",
            element: <App />
        },
        {
            path: "/About",
            element: <About />
        },
        {
            path: "/main/:M",
            element: <MainNews />
        }
    ]
)
ReactDOM.createRoot(document.getElementById('root')).render(
    <InputContextProvider>
        <RouterProvider router={router} />
    </InputContextProvider>
)
