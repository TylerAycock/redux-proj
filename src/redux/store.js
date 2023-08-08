import {configureStore} from '@reduxjs/toolkit'
import potentialCountriesReducer from './slices/potentialCountriesSlice'
// Since the reducer is the default export from potentialCountriesSlice, we can simply import it directly.
import displayedCountryReducer from '../redux/slices/displayCountrySlice'
import loadingStatusReducer from '../redux/slices/loadingSlice'

export default configureStore({
    reducer: {
        potentialCountries: potentialCountriesReducer,
        displayedCountry: displayedCountryReducer,
        loadingStatus: loadingStatusReducer
    }
})