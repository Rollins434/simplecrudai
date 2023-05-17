import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import  personReducer  from "./features/personSlice";
import {configureStore} from '@reduxjs/toolkit'

export const store = configureStore({
reducer:{
    person:personReducer
}
})

export const useAppDispatch:() => typeof store.dispatch=useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;