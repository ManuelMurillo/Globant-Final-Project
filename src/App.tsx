import { withRouter } from 'react-router-dom';
import './App.css';
import { DocsRouting } from './features/docs/DocsRouting';
import { RecipesRouting } from './features/recipes/RecipesRouting';
import { NutritionRouting } from './features/nutrition/NutritionRouting';
import { Footer } from './app/components/Footer';
import { Header } from './app/components/Header';

function App() {
  return (
    <>
      <Header />
      <main>
        <DocsRouting />
        <RecipesRouting />
        <NutritionRouting />
      </main>
      <Footer />
    </>
  );
}

export default withRouter(App);
