import React, { createContext, useReducer } from "react"
import auth from "./reducers/auth";
import contacts from "./reducers/conacts";
import contactInitialState from "./initialStates/contactInitialState";
import authInitialState from "./initialStates/authInitialState";

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {

    const [authState, authDispatch] = useReducer(auth, authInitialState);
    const [conactsState, contactsDispatch] = useReducer(contacts, contactInitialState);

    return <GlobalContext.Provider value={{ authState, conactsState, authDispatch, contactsDispatch }}>{children}</GlobalContext.Provider>
};


export default GlobalProvider;