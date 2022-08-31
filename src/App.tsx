import React from 'react';
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
import {SubscriptionView} from "./views/SubscriptionView";
import {BankSite} from "./views/BankSite";
import { sitePosition } from 'types';
import {SubUserView} from "./views/SubUserView";

export const App = () => {
    const {isLogged, role} = useSelector((state: RootState) => state.user)

    if (isLogged) {
        return (
            <>
                <HeaderApp logged={isLogged}/>
                <Container>
                    <Routes>
                        <Route path={"/"} element={<MainView/>}/>
                        <Route path={"/main"} element={<MainView/>}/>
                        <Route path={"/fire"} element={<FireView/>}/>
                        <Route path={"/user"} element={<UserView/>}/>
                        <Route path={"/subscription"} element={<SubscriptionView/>}/>
                        <Route path={"/bank"} element={<BankSite/>}/>
                        <Route path={"/logout"} element={<MainView/>}/>
                        <Route path={"/login"} element={<UserView/>}/>
                        <Route path={"/about"} element={<AboutView/>}/>
                        {role === sitePosition.USER_SUB && <Route path={"/sub-user"} element={<SubUserView/>}/>}
                    </Routes>
                </Container>
            </>
        );
    }

    return (
        <>
            <HeaderApp logged={isLogged}/>
            <Container>
                <Routes>
                    <Route path={"/"} element={<MainView/>}/>
                    <Route path={"/main"} element={<MainView/>}/>
                    <Route path={"/register"} element={<SignupView/>}/>
                    <Route path={"/login"} element={<LoginView/>}/>
                    <Route path={"/about"} element={<AboutView/>}/>
                </Routes>
            </Container>
        </>
    );
}

export const Container = styled.div`
  margin: 20px 40px;
`;