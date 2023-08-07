import {configureStore} from '@reduxjs/toolkit'
import potentialCountriesReducer from './slices/potentialCountriesSlice'
// Since the reducer is the default export from potentialCountriesSlice, we can simply import it directly.

export default configureStore({
    reducer: {potentialCountries: potentialCountriesReducer}
})