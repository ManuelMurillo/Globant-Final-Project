import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchSearchRecipes } from "../slice/recipesSlice";

export function Search() {

    const dispatch = useDispatch()

    const [searchString, SetSearchString] = useState("");

    const ChangeNameTask = (e: React.ChangeEvent<HTMLInputElement>) => {
        SetSearchString(e.target.value);
    };

    const Search = () => {
        dispatch(fetchSearchRecipes(searchString))
    }

    return (
        <section className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div>Busca una Receta</div>
                    <input
                        type="text"
                        id="movie"
                        value={searchString}
                        onChange={ChangeNameTask}
                        aria-required="true"
                    />
                    <br />
                    <button type="button" onClick={Search}>
                        Buscar Receta
                    </button>
                </div>
            </div>
        </section>
    );
}
