import { useSelector } from "react-redux";

import { RootState } from "../../redux/reducer";

export const useProfile = () =>
    useSelector((state: RootState) => state.profile.profile);
