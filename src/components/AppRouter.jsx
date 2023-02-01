import React from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import Users from "./users/Users";
import UserDetailsPage from "../pages/UserDetailsPage";
import ErrorPage from "../pages/ErrorPage";
import HelloWorld from "../pages/HelloWorld";
import UsersForTest from "./usersForTest/UsersForTest";

const AppRouter = () => {
    return (
        <Routes>
            <Route path={'/'} element={<HomePage/>}/>
            <Route path={'/about'} element={<AboutPage/>}/>
            <Route path={'/hello'} element={<HelloWorld/>}/>
            <Route path={'/users'} element={<Users/>}/>
            <Route path={'/users-test'} element={<UsersForTest/>}/>
            <Route path={'/users/:id'} element={<UserDetailsPage/>}/>
            <Route path={'/*'} element={<ErrorPage/>}/>
        </Routes>
    );
};

export default AppRouter;