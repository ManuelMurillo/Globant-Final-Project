import { Switch, Route } from "react-router-dom";
import { Docs } from "./components/Docs";

export function DocsRouting() {
  return (
    <>
      <Switch>
        <Route path="/docs" exact component={Docs}>
        </Route>
      </Switch>
    </>
  );
}
