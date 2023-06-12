import {PayloadAction, createSlice} from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

interface User {
    name: string,
    currentSet: any
}

interface HomeState {
    user: User
}

const initialState: HomeState = {
    user: {
        name: '',
        currentSet: {}
    },

}

export const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload
        }
    }
})

export const {setUser} = homeSlice.actions

export const selectUser = (state: RootState) => state.home.user;

export default homeSlice.reducer