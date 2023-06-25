import React,{Fragment} from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  defer
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { HomeLayout } from './components/homelayout';
import { AuthLayout } from './authlayout';
import DashboardHome from './components/hypertension/home';
import Home from './components/hypertension/home';
import About from './components/hypertension/about';
import Registry from './components/hypertension/registry';
import Gallery from './components/hypertension/gallery';
import Contact from './components/hypertension/contact';
import Login from './components/hypertension/login';
import Register from './components/hypertension/register';
import { ProtectedLayout } from './PrivateRoute';
import Index from './components/hypertension-registry';
import AuthContextProvider, { AuthProvider } from './AuthContext';
import DoctoryList from './components/hypertension-registry/doctor-list';
import Administrator from './components/hypertension-registry/administrator';
import RegionalList from './components/hypertension-registry/regional-list';
const getUserData = () =>
  new Promise((resolve) =>
    setTimeout(() => {
      const user = window.localStorage.getItem("user");
      resolve(user);
    }, 3000)
  );

// for error
// const getUserData = () =>
//   new Promise((resolve, reject) =>
//     setTimeout(() => {
//       reject("Error");
//     }, 3000)
//   );

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      element={<AuthLayout />}
      loader={() => defer({ userPromise: getUserData() })}
    >
      <Route element={<HomeLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/registry" element={<Registry />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      <Route path="/dashboard/" element={<ProtectedLayout />}>
      <Route path="/dashboard/home" element={<DashboardHome />} />
        <Route path="/dashboard/doctoryList" element={<DoctoryList />} />
        <Route path="/dashboard/adminlist" element={<Administrator />} />
        <Route path="/dashboard/regionallist" element={<RegionalList />} />
      </Route>
    </Route>
  )
);

