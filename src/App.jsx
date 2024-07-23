import React from 'react'
import {
  Route,
  createHashRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AllProjects from './pages/AllProjects';

const router = createHashRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<HomePage />} /> 
      <Route path='/projects' element={<AllProjects/>}/>
      {/*<Route path='/jobs' element={<JobsPage />} /> 
      <Route path='/jobs/:id' element={<JobPage />} loader = {jobLoader} /> 
      <Route path='*' element={<NotFoundPage />} />
      */}
    </Route>
  )// makes browser instance, default path My App
);

const App = () => {
  
  return (
    < RouterProvider router={router}/>

  )
}

export default App
