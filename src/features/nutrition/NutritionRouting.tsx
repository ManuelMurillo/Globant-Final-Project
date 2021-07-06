import { Switch, Route } from "react-router-dom";
import { NutritionalCalculator } from "./components/NutritionCalculator";


export function NutritionRouting() {
  return (
    <>
      <Switch>
        <Route path="/saved" exact component={NutritionalCalculator}>
        </Route>
      </Switch>
    </>
  );
}
