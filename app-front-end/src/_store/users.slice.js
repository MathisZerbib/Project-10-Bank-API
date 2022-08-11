import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';

import { fetchWrapper } from '../_helpers';


// create slice

const name = 'user';
const initialState = createInitialState();
const extraActions = createExtraActions();
const extraReducers = createExtraReducers();
const slice = createSlice({ name, initialState, extraReducers });

// exports

export const userActions = { ...slice.actions, ...extraActions };
export const usersReducer = slice.reducer;

// implementation

function createInitialState() {
    return {
        profile: JSON.parse(localStorage.getItem('profile')),
        error: null

    }
}

function createExtraActions() {
    const baseUrl = `http://localhost:3001/api/v1/user/profile`;

    return {
        profile: profile()
    };    

    function profile() {
        return createAsyncThunk(
            `${name}/profile`,
            async () => await fetchWrapper.post(baseUrl)
        );
    }
}

function createExtraReducers() {
    return {
        ...profile()
    };

    function profile() {
        var { pending, fulfilled, rejected } = extraActions.profile;
        return {
            [pending]: (state) => {
                state.profile = { loading: true };
            },
            [fulfilled]: (state, action) => {
                const profileUser = action.payload;
                localStorage.setItem('profile', JSON.stringify(profileUser));

                state.profile = profileUser;
                console.log(current(state))

                // store user info
            },
            [rejected]: (state, action) => {
                state.profile = { error: action.error };
            }
        };
    }
}
