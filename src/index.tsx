import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { ThemeProvider } from '@mui/material';
import { THEME } from './constants';
import { hydrate, render } from "react-dom";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
const root =
  document.getElementById('root') as HTMLElement


const element = <React.StrictMode>
    <ThemeProvider theme={THEME}>
        <App />
    </ThemeProvider>
</React.StrictMode>;

const router = createBrowserRouter([
    {
        path: '/',
        element: element
    },
    {
        path: '/minsk',
        element: element
    },
    {
        path: '/nn',
        element: element
    },
])
render(<RouterProvider router={router} />, document.getElementById('root'));

if (root.hasChildNodes()) {
    hydrate(<RouterProvider router={router} />, root);
} else {
    render( <RouterProvider router={router} />, root);
}
