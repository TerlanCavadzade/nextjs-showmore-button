import axios from "axios";
import { RecipeRes } from "../types/recipies";

export const getRecipes = async (page: string = '1') => {
    const limit = 10;
    const convertedPage = Math.ceil(parseFloat(page))
    const fetchPage = convertedPage * limit;

    const res = await axios<RecipeRes>('https://dummyjson.com/recipes', {
        params: {
            limit: fetchPage,
            skip: 0
        }
    });

    return res.data
}

