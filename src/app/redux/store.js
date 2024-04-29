import { configureStore } from "@reduxjs/toolkit";
import EventEmit from "./features/EventEmit";
import GlobalStore from "./features/GlobalStore";

export const ReduxStore = configureStore({
        reducer: {
            events: EventEmit,
            store: GlobalStore
        }
    })