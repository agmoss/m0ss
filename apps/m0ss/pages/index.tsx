import { withPage } from "@src/components/withPage";
import { IProfile, landingData } from "@src/data";
import { Landing as LandingPage } from "@src/pages";
import { getText } from "@src/utils";
import * as E from "fp-ts/Either";
import { pipe } from "fp-ts/function";
import { DeepRequired } from "utility-types";

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
