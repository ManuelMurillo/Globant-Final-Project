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
                <div className="col-sm-12 d_flex justify_content_center p_1">
                    <h3>Looking for a Recipe</h3>
                </div>
                <div className="col-sm-12 d_flex justify_content_center p_1">
                    <div>
                        <input
                            type="text"
                            id="movie"
                            value={searchString}
                            onChange={ChangeNameTask}
                            aria-required="true"
                            className="p_1"
                        />
                        <button type="button" className="p_1" onClick={Search}>
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
