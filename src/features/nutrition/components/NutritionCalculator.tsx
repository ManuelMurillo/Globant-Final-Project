import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectRecipes } from "../../recipes/slice/recipesSlice";
import { NutritionalCard } from "./NutritionCard";

function Empty() {
  return <div className="col-sm-12 d-flex justify_content_center">
    <NutritionalCard />
  </div>
}

export function NutritionalCalculator() {

  const recipes: any = useSelector(selectRecipes);

  return (
    <section aria-label="saved recipes" id="savedRecipes" className="container">
      <div className="row">
        {Object.keys(recipes).length === 0 ?
          <Empty />
          : recipes.map((recipe: any, index: any) => {
            return (
              <div className="col-sm-12 col-md-6 col-lg-4" key={index}>
                <NutritionalCard info={recipe} />
              </div>
            )
          })
        }
      </div>
    </section>
  );
}


