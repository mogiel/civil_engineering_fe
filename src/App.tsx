import React, {useState} from 'react';
import './App.css';
import {FireView} from "./views/Fire";
import {HeaderApp} from "./components/Header/Headers";
import styled from "styled-components";
import {Route, Routes} from "react-router-dom";
import {AboutView} from "./views/About";
import {SignupView} from "./views/SingUp";
import {MainView} from './views/MainView';
import {LoginView} from './views/Login';
import {UserView} from './views/UserView';
import {useSelector} from "react-redux";
import {RootState} from "./components/store";

export const App = () => {
    const user = useSelector((state: RootState) => state.user.isLogged)


    return (
        <>
            <HeaderApp/>
            <Container>
                <Routes>
                    <Route path={"/"} element={<MainView/>}/>
                    <Route path={"/main"} element={<MainView/>}/>
                    <Route path={"/fire"} element={<FireView/>}/>
                    <Route path={"/register"} element={<SignupView/>}/>
                    <Route path={"/login"} element={<LoginView/>}/>
                    <Route path={"/User"} element={<UserView/>}/>
                    <Route path={"/about"} element={<AboutView/>}/>
                </Routes>
            </Container>
        </>
    );
}

export const Container = styled.div`
  margin: 20px 40px;
`;