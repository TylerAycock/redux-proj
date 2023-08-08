import { createSlice } from '@reduxjs/toolkit'

export const  loadingSlice = createSlice({
    name: 'loading',
    initialState:{
        value: false
    },
    reducers: {
        setLoading: (state) => {
            state.value = true
        },
        stopLoading: (state) => {
            state.value= false 
        }
    }
})

export const {setLoading, stopLoading} = loadingSlice.actions 

export const loadingSubscrition = (state) => state.loadingStatus.value

export default loadingSlice.reducer