import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../components/api";

export const getData = createAsyncThunk('/womensonly', async () => {
        const response = await axios.get(`${API}/womensonly`)
        return response.data;
});

export const getMen = createAsyncThunk('/mensonly', async () => {
    const response = await axios.get(`${API}/mensonly`)
    return response.data;
});

export const getMobiles = createAsyncThunk('/Mobiles', async () => {
    const response = await axios.get(`${API}/Mobiles`)
    return response.data;
});

export const getLaptops = createAsyncThunk('/Laptops', async () => {
    const response = await axios.get(`${API}/Laptops`)
    return response.data;
});

export const getElectronics = createAsyncThunk('/electronics', async () => {
    const response = await axios.get(`${API}/electronics`)
    return response.data;
});

export const getCamera = createAsyncThunk('/camera', async () => {
    const response = await axios.get(`${API}/camera`)
    return response.data;
});

export const getGrooming = createAsyncThunk('/Grooming', async () => {
    const response = await axios.get(`${API}/Grooming`)
    return response.data;
});

export const getBooks = createAsyncThunk('/Books', async () => {
    const response = await axios.get(`${API}/Books`)
    return response.data;
});

export const getToys = createAsyncThunk('/Toys', async () => {
    const response = await axios.get(`${API}/Toys`)
    return response.data;
});

export const getSnacks = createAsyncThunk('/Snacks', async () => {
    const response = await axios.get(`${API}/Snacks`)
    return response.data;
});

export const getBeauty = createAsyncThunk('/Beauty', async () => {
    const response = await axios.get(`${API}/Beauty`)
    return response.data;
});
export const productSlice = createSlice({
    name:'products',
    initialState:{
        women:[],
        selectedItem:null,
        status:'idle',
        error:null,
    },
    reducers:{
        setSelectedItem:(state, action) => {
            state.selectedItem = action.payload;
        },
    },
    extraReducers:(builder) => {
        builder
        .addCase(getData.pending, (state) => {
            state.status = 'Loading';
        })
        .addCase(getData.fulfilled, (state, action) => {
            state.status = 'Succeeded';
            state.women = action.payload;
        })
        .addCase(getData.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
        .addCase(getMen.fulfilled, (state, action) => {
            state.status = 'Succeeded';
            state.women = action.payload;
        })
        .addCase(getMobiles.fulfilled, (state, action) => {
            state.status = 'Succeeded';
            state.women = action.payload;
        })
        .addCase(getLaptops.fulfilled, (state, action) => {
            state.status = 'Succeeded';
            state.women = action.payload;
        })
        .addCase(getElectronics.fulfilled, (state, action) => {
            state.status = 'Succeeded';
            state.women = action.payload;
        })
        .addCase(getCamera.fulfilled, (state, action) => {
            state.status = 'Succeeded';
            state.women = action.payload;
        })
        .addCase(getGrooming.fulfilled, (state, action) => {
            state.status = 'Succeeded';
            state.women = action.payload;
        })
        .addCase(getBooks.fulfilled, (state, action) => {
            state.status = 'Succeeded';
            state.women = action.payload;
        })
        .addCase(getToys.fulfilled, (state, action) => {
            state.status = 'Succeeded';
            state.women = action.payload;
        })
        .addCase(getSnacks.fulfilled, (state, action) => {
            state.status = 'Succeeded';
            state.women = action.payload;
        })
        .addCase(getBeauty.fulfilled, (state, action) => {
            state.status = 'Succeeded';
            state.women = action.payload;
        })
    }
})

export const {setSelectedItem} = productSlice.actions;
export default productSlice.reducer;