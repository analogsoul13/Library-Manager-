import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


//Create Action
export const createBookData = createAsyncThunk("createBookData", async (data, {rejectWithValue}) => {

    const response = await fetch("https://671e1cec1dfc429919815045.mockapi.io/crud", {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(data),
    })

    try {
        const result = await response.json()
        return result;

    } catch (error) {
        return rejectWithValue(error);
    }
})

//Read Action
export const showBooks = createAsyncThunk("showUser", async(args,{rejectWithValue}) => {
    const response = await fetch("https://671e1cec1dfc429919815045.mockapi.io/crud");
    try {
        const result = await response.json();
        console.log(result)
        return result
    } catch (error) {
        return rejectWithValue(error)
    }
});

//DeleteAction
export const deleteBook = createAsyncThunk("deleteBook", async(id,{rejectWithValue}) => {
    const response = await fetch(`https://671e1cec1dfc429919815045.mockapi.io/crud/${id}` ,
        {method : "DELETE"});
    try {
        const result = await response.json();
        console.log(result)
        return result
    } catch (error) {
        return rejectWithValue(error)
    }
});

export const bookDetail = createSlice({
    name: "bookDetail",
    initialState: {
        books: [],
        loading: false,
        error: null,
    },
    reducers : {

    },
    extraReducers : (builder) => {
        builder.addCase(createBookData.pending, (state) => {
            state.loading = true;
        }),
        builder.addCase(createBookData.fulfilled, (state,action) => {
            state.loading = false;
            state.books.push(action.payload)
        }),
        builder.addCase(createBookData.rejected,(state,action) => {
            state.loading = false;
            state.books = action.payload
        }),
        builder.addCase(showBooks.pending, (state) => {
            state.loading = true;
        }),
        builder.addCase(showBooks.fulfilled, (state,action) => {
            state.loading = false;
            state.books = action.payload
        }),
        builder.addCase(showBooks.rejected,(state,action) => {
            state.loading = false;
            state.books = action.payload
        }),
        builder.addCase(deleteBook.pending, (state) => {
            state.loading = true;
        }),
        builder.addCase(deleteBook.fulfilled, (state,action) => {
            state.loading = false;
            console.log("Delete Action :", action.payload)
        }),
        builder.addCase(deleteBook.rejected,(state,action) => {
            state.loading = false;
            const {id} = action.payload
            if(id){
                state.books = state.books.filter((item)=> item.id !== id)
            }

            state.books = action.payload
        })
    }
})

export default bookDetail.reducer;