import React from 'react'
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider,Outlet } from 'react-router-dom';
import About from './components/About';
import Body from './components/Body';
import ErrorPage from './components/ErrorPage';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import RestaturantMenuPage from './components/RestaturantMenuPage';
import { Provider } from 'react-redux';
import store from './utils/store';

const App = () =>{
    return (
     <>
     <Provider store={store}>
     <Navbar/>
     <Outlet/>
     <Footer/>
     </Provider>
     </>
    )
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage/>,
        children:[
            {
                path: "/",
                element: <Body/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: "/restaurant/:id",
                element: <RestaturantMenuPage/>
            }
        ],
    },
    
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router}/>);