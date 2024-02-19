import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage';


const Router = () => {
  return (
    <Routes>
    <Route
        path="/"
        element={
          <HomePage />
        }
      />
    <Route
        path="/about"
        element={
            <AboutPage />
        }
      />


    </Routes>
   
  )
}

export default Router