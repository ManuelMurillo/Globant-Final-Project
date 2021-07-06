import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../app/store/store';
import { NutritionalCalculator } from './NutritionCalculator';
import { NutritionalCard } from './NutritionCard';


test('render Detail Recipe Component', () => {
    const { getByText } = render(
        <Provider store={store}>
            <NutritionalCalculator />
        </Provider>
    );
    expect(getByText('There are no saved recipes')).toBeInTheDocument();
});

test('render Detail Recipe Component', () => {
    const { getByText } = render(
        <Provider store={store}>
            <NutritionalCard />
        </Provider>
    );
    expect(getByText('There are no saved recipes')).toBeInTheDocument();
});
