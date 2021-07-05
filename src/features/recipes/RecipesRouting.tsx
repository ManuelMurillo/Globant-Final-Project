import { Switch, Route } from "react-router-dom";
import { Recipes } from "./components/Recipes";

export function RecipesRouting() {
  return (
    <>
      <Switch>
        <Route path="/recipes" exact component={Recipes}>
        </Route>
      </Switch>
    </>
  );
}
