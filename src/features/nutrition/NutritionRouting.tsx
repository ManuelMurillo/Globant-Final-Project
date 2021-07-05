import { Switch, Route } from "react-router-dom";
import { NutritionalCalculator } from "./components/NutritionCalculator";


export function NutritionRouting() {
  return (
    <>
      <Switch>
        <Route path="/nutrition" exact component={NutritionalCalculator}>
        </Route>
      </Switch>
    </>
  );
}
