import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducer";

export const useMedia = () =>
    useSelector((state: RootState) => state.media.media);
