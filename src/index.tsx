import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import {BrowserRouter} from "react-router-dom";
import {ChakraProvider} from '@chakra-ui/react'
import {Provider} from 'react-redux';
import {Persistor, store} from "./components/store";
import {PersistGate} from "redux-persist/integration/react"

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <ChakraProvider>
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <PersistGate loading={null} persistor={Persistor}>
                        <App/>
                    </PersistGate>
                </Provider>
            </BrowserRouter>
        </React.StrictMode>
    </ChakraProvider>
);
