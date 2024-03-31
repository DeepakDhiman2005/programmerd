import { createSlice } from "@reduxjs/toolkit";

const Slicer = createSlice({
    name: 'EventEmit',
    initialState: {
        value: true,
        sidebar: false,
        searchbar: false
    },
    reducers: {
        SidebarOpenClose: (state, action)=>{ // state, action{payload, type}
            state.sidebar = action.payload;
        },
        SearchBarOpenClose: (state, action) => { // state, action{payload, type}
            state.searchbar = action.payload
        }
    }
});

export const { SidebarOpenClose, SearchBarOpenClose } = Slicer.actions;
export default Slicer.reducer;
