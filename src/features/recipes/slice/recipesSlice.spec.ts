import recipesReducer, {
  addRecipe, RecipesState, removeRecipe, updateSearchString
} from './recipesSlice';

const recipe = {
    'uri': 'http://www.edamam.com/ontologies/edamam.owl#recipe_353aa6aeaf25e64e79067f80dd16513e',
    'label': 'Southern-fried chicken tacos',
    'image': 'https://www.edamam.com/web-img/bf9/bf96797371f5f464027e38cff5ddedcb.jpg',
    'source': 'BBC Good Food',
    'url': 'https://www.bbcgoodfood.com/recipes/southern-fried-chicken-tacos',
    'shareAs': 'http://www.edamam.com/recipe/southern-fried-chicken-tacos-353aa6aeaf25e64e79067f80dd16513e/fried+chicken',
    'yield': 4,
    'dietLabels': []
}
const initialState: RecipesState = {
  search: '',
  recipes: null,
  selectedRecipes: [],
  selected: null,
  status: ''
};
const actualState: RecipesState = {
  search: '',
  recipes: null,
  selectedRecipes: [recipe],
  selected: null,
  status: ''
};

describe('recipes reducer', () => {
  it('should handle initial state', () => {
    expect(recipesReducer(undefined, { type: 'unknown' })).toEqual({
      search: '',
      recipes: null,
      selectedRecipes: [],
      selected: null,
      status: ''
    });
  });
  it('should handle updateSearchString', () => {
    const actual = recipesReducer(initialState, updateSearchString('avocado'));
    expect(actual.search).toEqual('avocado');
  });
  it('should handle addSelectedRecipe', () => {
    const actual = recipesReducer(initialState, addRecipe(recipe));
    expect(actual.selectedRecipes).toEqual([recipe]);
  });
  it('should handle incrementByAmount', () => {
    const actual = recipesReducer(actualState, removeRecipe(recipe));
    expect(actual.selectedRecipes).toEqual([]);
  });
});
