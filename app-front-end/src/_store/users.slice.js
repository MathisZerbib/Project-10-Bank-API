import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { fetchWrapper } from '../_helpers';


// create slice

const name = 'userInfo';
const initialState = createInitialState();
const reducers = createReducers();
const extraActions = createExtraActions();
const extraReducers = createExtraReducers();
const slice = createSlice({ name, initialState, reducers, extraReducers });

// exports

export const userActions = { ...slice.actions, ...extraActions };
export const usersReducer = slice.reducer;

// implementation

function createInitialState() {
    return {
        user: JSON.parse(localStorage.getItem('userInfo')),
        error: null
    }
}

function createReducers() {
    return {
        wipeUserData
    };

    function wipeUserData(state) {
        state.profile = null
        localStorage.removeItem('userInfo');
    }
}

function createExtraActions() {
    const baseUrl = `http://localhost:3001/api/v1/user/profile`;

    return {
        profile: profile()
    };    

    function profile() {
        return createAsyncThunk(
            `${name}/userProfile`,
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
                localStorage.setItem('userInfo', JSON.stringify(profileUser));

                state.user = profileUser;
                // console.log(current(state))

                // store user info
            },
            [rejected]: (state, action) => {
                state.profile = { error: action.error };
            }
        };
    }
}
