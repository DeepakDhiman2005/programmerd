"use client"
import { ReduxStore } from "./store";
import { Provider } from "react-redux";

export const Providers = ({children}) => {
    return <Provider store={ReduxStore}>
        {children}
    </Provider>
}