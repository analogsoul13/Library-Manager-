import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Fetch books using fetch method
export const showBooks = createAsyncThunk(
    'books/showBooks',
    async (_, { rejectWithValue }) => {
      try {
        const response = await fetch('https://671e1cec1dfc429919815045.mockapi.io/crud');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Fetched Data:', data); // Check this in the console
        return data;
      } catch (error) {
        console.error('Fetch error:', error);
        return rejectWithValue(error.message || 'Something went wrong');
      }
    }
  );
  
const bookDetail = createSlice({
  name: 'books',
  initialState: {
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(showBooks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(showBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.books = action.payload;
      })
      .addCase(showBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default bookDetail.reducer;
