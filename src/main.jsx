import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from './views/home.jsx';
import { APP_ROUTES } from './utility.js';
import AddNew from './views/AddNew.jsx';
import Edit from './views/Edit.jsx';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="" element={<App />}>
			<Route path={APP_ROUTES.HOME} element={<Home />} />
			<Route path={APP_ROUTES.ADD_NEW} element={<AddNew />} />
			<Route path={APP_ROUTES.EDIT + '/:index'} element={<Edit />} />

			<Route path="*" element={<p className='text-center fs-1 my-auto'>404 Path not resolved</p>} />
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
)
