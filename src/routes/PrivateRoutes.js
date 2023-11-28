import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
import { selectIsAuthentificated } from "components/redux/selectors";
import { fetchContacts, addContact, deleteContact } from "components/redux/operations";

export default function PrivateRoutes() {
    const isAuth =  useSelector(selectIsAuthentificated)
    const dispatch = useDispatch()

    useEffect(()=>{
        if (isAuth){
            dispatch(fetchContacts())
            dispatch(addContact())
            dispatch(deleteContact())
        }
    },[isAuth, dispatch])
  return  isAuth ? <Outlet/> : <Navigate to ="/"/>
   
  
}

