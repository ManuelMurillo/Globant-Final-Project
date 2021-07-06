import { useDispatch } from "react-redux";
import { addRecipe } from "../slice/recipesSlice";

export function CardRecipe(props: any) {

    const dispatch = useDispatch()

    const AddRecipe = () => {
        dispatch(addRecipe(props.info));
    }

    return (
        <section className="container">
            <div className="row">
                <div className="col-sm-12">
                    <h3>{props.info.label}</h3><br />
                </div>
                <div className="col-sm-12">
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
                <div className="col-sm-6">
                    <button>Detalle</button>
                </div>
                <div className="col-sm-6">
                    <button onClick={AddRecipe}>Agregar</button>
                </div>
            </div>
        </section>
    );
}
