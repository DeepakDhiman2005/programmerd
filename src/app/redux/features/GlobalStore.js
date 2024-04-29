import { createSlice } from "@reduxjs/toolkit";

const Slicer = createSlice({
    name: "GlobalStore",
    initialState: {
        blog: {}
    },
    reducers: {
        setBlogPost: (state, action) => { // state, action {payload, type}
            state.blog = action.payload;
        }
    }
})

export const { setBlogPost } = Slicer.actions;
export default Slicer.reducer;