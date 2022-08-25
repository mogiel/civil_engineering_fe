import {createSlice} from "@reduxjs/toolkit";

export interface UserState {
    username: string;
    email: string;
    role: string;
    isLogged: boolean
}

export const initialState: UserState = {
    email: "",
    username: "",
    role: "",
    isLogged: false
}

interface SetUsername {
    payload: string;
}

interface SetEmail {
    payload: string
}

interface SetRole {
    payload: string
}

interface SetLogged {
    payload: boolean
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUsername: (state, action: SetUsername) => {
            state.username = action.payload
        },
        setEmail: (state, action: SetEmail) => {
            state.email = action.payload
        },
        setRole: (state, action: SetRole) => {
            state.role = action.payload
        },
        setLogged: (state, action: SetLogged) => {
            state.isLogged = action.payload
        }
    }
})

export const {setUsername, setRole, setEmail, setLogged} = userSlice.actions

export default userSlice.reducer;