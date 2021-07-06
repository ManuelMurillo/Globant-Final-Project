import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../app/store/store';
import { DetailRecipe } from './DetailRecipe';
import { ListRecipes } from './ListRecipes';
import { CardRecipe } from './RecipeCard';
import { Search } from './Search';

test('render Detail Recipe Component', () => {
    const { getByText } = render(
        <Provider store={store}>
            <DetailRecipe />
        </Provider>
    );
    expect(getByText('Back')).toBeInTheDocument();
});

test('render List Recipe Component', () => {
    const { getByText } = render(
        <Provider store={store}>
            <ListRecipes />
        </Provider>
    );
    expect(getByText('There is no coincidences')).toBeInTheDocument();
});

test('render Card Recipe Component', () => {
    const { getByText } = render(
        <Provider store={store}>
            <CardRecipe />
        </Provider>
    );
    expect(getByText('There is no coincidences')).toBeInTheDocument();
});

test('render Search Component', () => {
    const { getByText } = render(
        <Provider store={store}>
            <Search />
        </Provider>
    );
    expect(getByText('Search')).toBeInTheDocument();
});
