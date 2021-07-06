import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Footer } from './Footer';
import { Header } from './Header';

test('renders Footer Components', () => {
    const { getByText } = render(<Footer />);
    expect(getByText(/Jhoan Manuel Murillo Yara/i)).toBeInTheDocument();
    expect(getByText(/many931212@gmail.com/i)).toBeInTheDocument();
    expect(getByText(/310 264 4682/)).toBeInTheDocument();
});
test('renders Header Components', () => {
    const { getByText } = render(
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    );
    expect(getByText(/Nutritional Calculator/i)).toBeInTheDocument();
    expect(getByText(/Recipes/i)).toBeInTheDocument();
    expect(getByText(/Docs/i)).toBeInTheDocument();
});
