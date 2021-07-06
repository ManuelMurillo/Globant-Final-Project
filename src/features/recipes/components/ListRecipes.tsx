import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchRecipes, selectRecipes, selectSearch, selectSearchRecipes } from "../slice/recipesSlice";
import { CardRecipe } from "./RecipeCard";

export function ListRecipes() {

    const recipes: any = useSelector(selectSearchRecipes);

    return (
        <section className="container">
            <div className="row">
                {recipes ? recipes.hits.map((recipe: any, index: any) => {
                    return (
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <CardRecipe info={recipe.recipe} key={index} />
                        </div>
                    )
                }) : ''}
            </div>
        </section>
    );
}
