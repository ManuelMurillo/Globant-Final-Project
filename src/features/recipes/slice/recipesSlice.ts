import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store/store';
import { fetchSearchRecipesAsync } from '../services/recipes.services';

export interface RecipesState {
  search: string,
  recipes: any,
  selectedRecipes: any[];
  selected: any;
  status: string;
}

const initialState: RecipesState = {
  search: '',
  recipes: null,
  selectedRecipes: [],
  selected: null,
  status: ''
};

export const fetchSearchRecipes = createAsyncThunk(
  'counter/fetchCount',
  async (search: string) => {
    const response = await fetchSearchRecipesAsync(search)
    return response;
  }
);

export const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    updateRecipe: (state, action: PayloadAction<any>) => {
      state.selected = action.payload;
    },
    updateSearchString: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    addRecipe: (state, action: PayloadAction<any>) => {
      state.selectedRecipes.push(action.payload);
    },
    removeRecipe: (state, action: PayloadAction<any>) => {
      const index = state.selectedRecipes.findIndex((x: any) => x.uri === action.payload.uri)
      state.selectedRecipes.splice(index, 1)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchRecipes.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSearchRecipes.fulfilled, (state, action) => {
        state.status = '';
        state.recipes = action.payload;
      });
  },
});

export const { addRecipe, removeRecipe, updateSearchString, updateRecipe } = recipesSlice.actions;
export const selectSearch = (state: RootState) => state.recipes.search;
export const selectRecipes = (state: RootState) => state.recipes.selectedRecipes;
export const selectRecipe = (state: RootState) => state.recipes.selected;
export const selectSearchRecipes = (state: RootState) => state.recipes.recipes;
export default recipesSlice.reducer;
