import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './Reducers/RootReducer'

const store = configureStore({
    reducer: rootReducer
})

export default store;
