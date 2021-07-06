import { useSelector } from "react-redux";
import { selectSearchRecipes } from "../slice/recipesSlice";
import { CardRecipe } from "./RecipeCard";

function Empty() {
    return <div className="col-sm-12 d-flex justify_content_center">
        <CardRecipe />
    </div>
}

export function ListRecipes() {

    const recipes: any = useSelector(selectSearchRecipes);

    return (
        <section aria-label="list founded recipes" id="listFoundedRecipes"className="container">
            <div className="row">
                {recipes ?
                    Object.keys(recipes.hits).length === 0 ?
                        <Empty />
                        : recipes.hits.map((recipe: any, index: any) => {
                            return (
                                <div className="col-sm-12 col-md-6 col-lg-4" key={index}>
                                    <CardRecipe info={recipe.recipe} />
                                </div>
                            )
                        }) : 
                        <Empty />
                        
                }
            </div>
        </section>
    );
}
