import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { removeRecipe, updateRecipe } from "../../recipes/slice/recipesSlice";
import s from './Nutrition.module.css'

export function NutritionalCard(props: any) {

    const dispatch = useDispatch()
    const history = useHistory();

    const RemoveRecipe = () => {
        alert('Recipe Removed!')
        dispatch(removeRecipe(props.info));
    }
    const DetailRecipe = () => {
        const id = props.info.uri.split('_')[1]
        dispatch(updateRecipe(props.info.recipe))
        history.push(`/recipes/${id}`)
    }
    return <>
        {props.info ?
            <section aria-label="saved recipe" id="savedRecipe" className={`container ${s.card}`}>
                <div className="row">
                    <div className="col-sm-12 d_flex justify_content_center p_1">
                        <h3>{props.info.label}</h3><br />
                    </div>
                    <div className="col-sm-12 p_1">
                        <img src={props.info.image} alt={props.info.label} />
                    </div>
                    <div className="col-sm-6">
                        <p>Calories: </p>
                        <p>{props.info.calories.toFixed(2)}</p>
                    </div>
                    <div className="col-sm-6">
                        <p>Source: </p>
                        <a href={props.info.url} target="_blank" rel="noopener noreferrer">{props.info.source}</a>
                    </div>
                    <div className="col-sm-12 d_flex justify_content_between p_1">
                        <button onClick={DetailRecipe}>Detail</button>
                        <button onClick={RemoveRecipe}>Remove Recipe</button>
                    </div>
                </div>
            </section> :
            <section aria-label="no saved recipes" id="noSavedRecipes" className={`container ${s.card}`}>
                <div className="row">
                    <div className="col-sm-12 d_flex justify_content_center p_1">
                        <h3>There are no saved recipes</h3><br />
                    </div>
                </div>
            </section>
        }
    </>
}
