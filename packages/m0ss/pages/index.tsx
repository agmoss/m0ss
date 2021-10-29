import * as E from "fp-ts/Either";

import { IProfile, landingData } from "@src/data";

import { DeepRequired } from "utility-types";
import { Landing as LandingPage } from "@src/pages";
import { getText } from "@src/utils";
import { pipe } from "fp-ts/function";
import { withPage } from "@src/components/withPage";

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

export default withPage(LandingPage);
