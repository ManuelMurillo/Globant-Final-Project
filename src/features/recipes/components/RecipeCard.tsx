import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { addRecipe, updateRecipe } from "../slice/recipesSlice";
import s from './Recipes.module.css';

export function CardRecipe(props: any) {

    const dispatch = useDispatch()
    const history = useHistory();

    const AddRecipe = () => {
        dispatch(addRecipe(props.info));
    }
    const DetailRecipe = () => {
        const id = props.info.uri.split('_')[1]
        dispatch(updateRecipe(props.info))
        history.push(`/recipes/${id}`)
    }

    return <>
        {props.info ?
            <section className={`container ${s.card}`}>
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
                        <button onClick={DetailRecipe}>Detalle</button>
                        <button onClick={AddRecipe}>Agregar</button>
                    </div>
                </div>
            </section> :
            <section className={`container ${s.card}`}>
                <div className="row">
                    <div className="col-sm-12 d_flex justify_content_center p_1">
                        <h3>No Hemos encontrado coincidencias</h3><br />
                    </div>
                </div>
            </section>
        }
    </>;
}
