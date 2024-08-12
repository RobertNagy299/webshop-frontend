import React, {useState} from 'react';
import './App.css'
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme, GridItem,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import RootLayout from "./layouts/RootLayout";
import Products from "./components/Products";
import Profile from "./components/Profile";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import DashBoard from "./components/DashBoard";
import Create, {createAction} from "./components/Create";
import SiteSkeleton from "./components/SiteSkeleton";



const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<SiteSkeleton> <RootLayout/></SiteSkeleton>} >
            <Route index element={
                <Products/>}/>
          <Route path="profile" element={<Profile/>} />
          <Route path="create" element={<Create/>} action={createAction}/>
        </Route>
    )
);

function App() {
  return (
    <RouterProvider router={router} />

  )
}

export default App;
