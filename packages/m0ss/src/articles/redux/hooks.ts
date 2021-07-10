import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducer";

export const useArticles = () =>
    useSelector((state: RootState) => state.art.articles);
export const useArticle = () =>
    useSelector((state: RootState) => state.art.art);
