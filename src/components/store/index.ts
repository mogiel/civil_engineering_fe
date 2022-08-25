import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "../features/user/user-slice";
import storage from 'redux-persist/lib/storage';
import {persistReducer, persistStore} from 'redux-persist';

const persistConfig = {
    key: 'user',
    storage,
}

const persistedReducer = persistReducer(persistConfig, userSlice.reducer)

export const store = configureStore({
    reducer: persistedReducer,
    // reducer: {
    //     user: userSlice.reducer
    // }
})

export const Persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>



