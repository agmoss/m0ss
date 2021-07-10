import React from "react";
import { useDispatch } from "react-redux";
import { compose } from "redux";

import withPage from "../../components/withPage";
import { Error, Loading } from "../../pages/placeholders";
import MediaPage from "../pages/media";
import { actions as mediaActions } from "../redux/model";
import { useMedia } from "../redux/hooks";

const MediaContainer = () => {
    const dispatch = useDispatch();

    const fetchMedia = compose(dispatch, mediaActions.fetchMedia);

    const media = useMedia();

    if (media === "Init") {
        fetchMedia();
    }

    if (media === "Fail") {
        return <Error />;
    }

    if (media === "Init" || media === "Pend") {
        return <Loading />;
    }

    return <MediaPage media={media} />;
};

export default withPage(MediaContainer);
