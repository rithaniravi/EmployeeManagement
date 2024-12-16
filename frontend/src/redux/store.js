import {configureStore} from "@reduxjs/toolkit";
import authReducer from '../features/auth/authslice'
import dataReducer from '../features/data/dataSlice'


export const store =configureStore({
    reducer:{ 
        // devTools:true,
        auth:authReducer,
        datas:dataReducer,
    },
})


