import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    username: string;
    password: string;
    isLoggedIn: boolean;
}

const initialState: UserState = {
    username: '',
    password: '',
    isLoggedIn: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<{ username: string, password: string }>) => {
            state.username = action.payload.username;
            state.password = action.payload.password;
            state.isLoggedIn = true;
        },
        logout: (state) => {
            state.username = '';
            state.password = '';
            state.isLoggedIn = false;
        },
    },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;