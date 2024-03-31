import { configureStore } from "@reduxjs/toolkit";
import EventEmit from "./features/EventEmit";

export const ReduxStore = configureStore({
        reducer: {
            events: EventEmit
        }
    })