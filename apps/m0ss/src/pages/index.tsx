import * as E from "fp-ts/Either";
import { pipe } from "fp-ts/function";
import { DeepRequired } from "utility-types";

import { IProfile, landingData } from "../data";
import { Main } from "../layouts/main";
import { withLayout } from "../layouts/main/withLayout";
import { getText } from "../utils";
import { Landing as LandingPage } from "../views";

export const getStaticProps = async () => {
    const md = pipe(
        await getText(landingData.profile.rant.url),
        E.fold(
            (_l) => "error",
            (r) => r
        )
    );

    const data: DeepRequired<IProfile> = {
        ...landingData,
        profile: {
            ...landingData.profile,
            rant: {
                ...landingData.profile.rant,
                content: md,
            },
        },
    };
    return {
        props: { profile: data },
    };
};

export default withLayout({ Layout: Main })(LandingPage);
