import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { addRecipe, selectRecipe } from "../slice/recipesSlice";
import s from './Recipes.module.css'

function RowTable(props: any) {
    return <>
        {props.sub ?
            <tr>
                <td>&nbsp; &nbsp; &nbsp;{props.data.label}</td>
                <td>{props.data.total.toFixed(2)} {props.data.unit}</td>
                <td>{props.data.daily.toFixed(2)} {props.data.unit}</td>
            </tr> :
            <tr>
                <td>{props.data.label}</td>
                <td>{props.data.total.toFixed(2)} {props.data.unit}</td>
                <td>{props.data.daily.toFixed(2)} {props.data.unit}</td>
            </tr>
        }
    </>
}

export function DetailRecipe() {

    const info = useSelector(selectRecipe);
    const dispatch = useDispatch()

    const history = useHistory()

    const OnBack = () => {
        history.goBack();
    }
    const AddRecipe = () => {
        dispatch(addRecipe(info));
    }

    return (
        <section className={`container ${s.details}`}>
            {info ?
                <div className="row">
                    <div className="col-sm-12 col-md-5 p_1">
                        <h2>{info.label}</h2><br />
                        <img src={info.image} alt={info.label} /><br />

                        <h3>Ingredients</h3><br />
                        {info.ingredientLines.map((ingredient: string) => {
                            return <p>{ingredient}</p>
                        })}
                        <br />
                        <br />
                        <h3>Total Calories</h3><br />
                        <p>{info.calories.toFixed(2)}</p>
                    </div>
                    <div className="col-sm-12 col-md-7 d_flex justify_content_center">
                        <table>
                            <tr><th><h3>Nutritional Table</h3></th></tr>
                            {info.digest.map((nutrient: any) => {
                                return <>
                                    <RowTable data={nutrient} />
                                    {nutrient.sub ?
                                        nutrient.sub.map((info: any) => {
                                            return <RowTable data={info} sub={true} />
                                        })
                                        : ''}
                                </>
                            })}
                        </table>
                    </div>
                </div>
                : ''}
            <div className="row">
                <div className="col-sm-12 d_flex justify_content_between">
                    <button onClick={OnBack}>Add</button>
                    <button onClick={OnBack}>Back</button>
                </div>
            </div>
        </section>
    );
}
