import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import PropertiesPage from './pages/PropertiesPage'
import ContactPage from './pages/ContactPage'
import PropertyDetails from './pages/PropertyDetails'
import MainLayout from './layouts/MainLayout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'services', element: <ServicesPage /> },
      { path: 'properties', element: <PropertiesPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'properties/:id', element: <PropertyDetails /> }, 
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
