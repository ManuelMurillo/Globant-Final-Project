import { Switch, Route } from "react-router-dom";
import { DetailRecipe } from "./components/DetailRecipe";
import { Recipes } from "./components/Recipes";

export function RecipesRouting() {
  return (
    <>
      <Switch>
        <Route path="/recipes" exact component={Recipes}/>
        <Route path="/recipes/:id" component={DetailRecipe}/>
      </Switch>
    </>
  );
}
