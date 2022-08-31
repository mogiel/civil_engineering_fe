import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import {BrowserRouter} from "react-router-dom";
import {ChakraProvider, ColorModeScript} from '@chakra-ui/react'
import {Provider} from 'react-redux';
import {Persistor, store} from "./components/store";
import {PersistGate} from "redux-persist/integration/react"
import { theme } from './views/thema';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <ChakraProvider>
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <PersistGate loading={null} persistor={Persistor}>
                        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
                        <App/>
                    </PersistGate>
                </Provider>
            </BrowserRouter>
        </React.StrictMode>
    </ChakraProvider>
);
