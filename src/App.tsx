import React, {useEffect, useState} from 'react';
import './App.css';
import {FireView} from "./views/Fire";
import {HeaderApp} from "./components/Header/Headers";
import styled from "styled-components";
import {Route, Routes, useNavigate} from "react-router-dom";
import {AboutView} from "./views/About";
import {SignupView} from "./views/SingUp";
import {MainView} from './views/MainView';
import {LoginView} from './views/Login';
import {UserView} from './views/UserView';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./components/store";
import {SubscriptionView} from "./views/SubscriptionView";
import {BankSite} from "./views/BankSite";
import {sitePosition, UserReturn} from 'types';
import {SubUserView} from "./views/SubUserView";
import {FetchOperator} from "./utils/Fetch/Fetch";
import {setEmail, setLogged, setRole, setUsername} from "./components/features/user/user-slice";

export const App = () => {
    const {isLogged, role} = useSelector((state: RootState) => state.user)

    const dispatch = useDispatch()
    const navigate = useNavigate();

    useEffect(() => {
        (
            async () => {
                const data = await new FetchOperator('user/info')
                const dataRes: UserReturn = await data.run('GET')

                if (dataRes.username) {
                    dispatch(setUsername(dataRes.username))
                    dispatch(setEmail(dataRes.email))
                    dispatch(setRole(dataRes.position))
                    dispatch(setLogged(true))
                } else {
                    dispatch(setUsername(""))
                    dispatch(setEmail(""))
                    dispatch(setRole(""))
                    dispatch(setLogged(false))

                    navigate('/main')
                }
            }
        )();
    }, []);

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

                        if (role === sitePosition.USER_SUB) {
                            <Route path={"/sub-user"} element={<SubUserView/>}/>
                        //Lista pozostałych stron dla użytkowników z subskrypcją
                        }

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