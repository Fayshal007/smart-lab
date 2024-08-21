import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/Root.jsx';
import Home from './components/Home/Home.jsx';
import Director from './components/pages/Director/Director.jsx';
import Postdocs from './components/pages/Postdocs/Postdocs.jsx';
import PhDStudents from './components/pages/Ph.DStudents/PhDStudents.jsx';
import MSStudents from './components/pages/M.S. Students/MSStudents.jsx';
import Alumni from './components/pages/Alumni/Alumni.jsx';
import MachineLearning from './components/pages/MachineLearning/MachineLearning.jsx';
import BioSensor from './components/pages/BioSensor/BioSensor.jsx';
import Publications from './components/pages/Publications/Publications.jsx';
import Contact from './components/pages/Contact/Contact.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },{
        path: '/director',
        element:<Director/>
      },
      {
        path: '/postdocs',
        element:<Postdocs/>
      },
      {
        path: '/phdstudents',
        element:<PhDStudents/>
      },
      {
        path: '/msstudents',
        element: <MSStudents/>
      },
      {
        path: '/alumni',
        element: <Alumni/>
      },
      {
        path: '/machinelearning',
        element: <MachineLearning/>
      },
      {
        path: '/biosensor',
        element: <BioSensor/>
      },
      {
        path: '/publication',
        element: <Publications/>
      },
      {
        path: '/contact',
        element: <Contact/>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
