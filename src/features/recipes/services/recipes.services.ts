import { HttpInstance } from "../../../app/services/httpRequest";
import env from '../../../app/environments'

export const fetchSearchRecipesAsync = async (searchString: string) => {
    const data = encodeURIComponent(searchString);
    try {
        const response = await HttpInstance.get(
            `api/recipes/v2?type=public&q=${data}&app_id=${env.RecipesAPI.appId}&app_key=${env.RecipesAPI.appKey}`
        )
        return response.data;
    } catch {
        console.error('Ha habido un error en el servicio');
        return { data: null }
    }
}