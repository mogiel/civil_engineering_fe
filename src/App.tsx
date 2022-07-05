import React from 'react';
import './App.css';
import {FireView} from "./views/Fire";
import {HeaderApp} from "./components/Header/Headers";
import styled from "styled-components";
import {Route, Routes} from "react-router-dom";
import {AboutView} from "./views/About";

export const App = () => {
  return (
    <>
        <HeaderApp />
        <Container>
            <Routes>
                <Route path={"/fire"} element={<FireView />} />
                <Route path={"/about"} element={<AboutView />} />
            </Routes>
        </Container>
    </>
  );
}

export

const Container = styled.div`
  margin: 20px 40px;
`;