import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { addRecipe, updateRecipe } from "../../recipes/slice/recipesSlice";

export function CardRecipe(props: any) {

    const dispatch = useDispatch()
    const history =useHistory();

    const AddRecipe = () => {
        dispatch(addRecipe(props.info));
    }
    const DetailRecipe = () => {
        const id = props.info.recipe.uri.split('_')[1]
        dispatch(updateRecipe(props.info.recipe))
        history.push(`/recipes/${id}`)
    }

    return (
        <section className="container">
            <div className="row">
                <div className="col-sm-12">
                    <h3>{props.info.recipe.label}</h3><br />
                </div>
                <div className="col-sm-12">
                    <img src={props.info.recipe.image} alt={props.info.recipe.label} />
                </div>
                <div className="col-sm-6">
                    <p>Calories: </p>
                    <p>{props.info.recipe.calories.toFixed(2)}</p>
                </div>
                <div className="col-sm-6">
                    <p>Source: </p>
                    <a href={props.info.recipe.url} target="_blank" rel="noopener noreferrer">{props.info.recipe.source}</a>
                </div>
                <div className="col-sm-6">
                    <button onClick={DetailRecipe}>Detalle</button>
                </div>
                <div className="col-sm-6">
                    <button onClick={AddRecipe}>Agregar</button>
                </div>
            </div>
        </section>
    );
}
