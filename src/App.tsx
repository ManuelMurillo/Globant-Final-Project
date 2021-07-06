import { Redirect, Switch, withRouter, Route } from 'react-router-dom';
import './App.css';
import { DocsRouting } from './features/docs/DocsRouting';
import { RecipesRouting } from './features/recipes/RecipesRouting';
import { NutritionRouting } from './features/nutrition/NutritionRouting';
import { Footer } from './app/components/Footer';
import { Header } from './app/components/Header';
import { Menu } from './app/components/Menu';

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <div className="row">
          <div className="col-2">
            <Menu />
          </div>
          <div className="col-10">
            <DocsRouting />
            <RecipesRouting />
            <NutritionRouting />
            <Switch>
              <Route path="*">
                <Redirect to="/docs" />
              </Route>
              <Route path="/">
                <Redirect to="/docs" />
              </Route>
            </Switch>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default withRouter(App);
