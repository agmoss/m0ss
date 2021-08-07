import { IProfile, landingData } from "../src/data";

import { DeepRequired } from "utility-types";
import { Landing as LandingPage } from "../src/pages/Landing";
import { getText } from "../src/utils/getData";
import withPage from "../src/components/withPage";

export async function getStaticProps(context: any) {
    const md = await getText(landingData.profile.rant.url);
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
}

export default withPage(LandingPage);
