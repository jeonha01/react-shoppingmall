import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

let initialState = {
    products: [],
    selectedItem: null,
    isLoading: false,
    error: null,
}

export const fetchProducts = createAsyncThunk('product/fetchAll', async (keyword, thunkApi) => {
    try {
        let url = `https://my-json-server.typicode.com/jeonha01/react-shoppingmall/products?q=${keyword}`;
        let response = await fetch(url);
        return await response.json();
    } catch (error) {
        thunkApi.rejectWithValue(error.message)
    }
})

export const fetchDetail = createAsyncThunk('product/fetchAll', async (id, thunkApi) => {
    try {
        let url = `https://my-json-server.typicode.com/jeonha01/react-shoppingmall/products?q=${id}`;
        let response = await fetch(url);
        return await response.json();
    } catch (error) {
        thunkApi.rejectWithValue(error.message)
    }
})




// function productReducer(state = initialState, action) {
//     let { type, payload } = action
//     switch (type) {
//         case "GET_PRODUCT_SUCCESS":
//             return { ...state, products: payload.data }
//         case "GET_PRODUCTDETAIL_SUCCESS":
//             return { ...state, selectedItem: payload.data }
//         default:
//             return { ...state }
//     }
// }

// export default productReducer

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        // getAllProducts(state, action) {
        //     state.products = action.payload.data
        // },
        // getSigleProduct(state, action) {
        //     state.selectedItem = action.payload.data
        // }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.isLoading = true
        })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.isLoading = false
                state.products = action.payload
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })


    },
    extraReducerss: (builder) => {
        builder.addCase(fetchDetail.pending, (state) => {
            state.isLoading = true
        })
            .addCase(fetchDetail.fulfilled, (state, action) => {
                state.isLoading = false
                state.selectedItem = action.payload
            })
            .addCase(fetchDetail.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
})





export const productAction = productSlice.actions
export default productSlice.reducer