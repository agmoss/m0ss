import React from "react";
import { DeepRequired } from "utility-types";

import { Hero, MainContent } from "../components";
import { IProfile } from "../data";
import {Main} from "../layouts/main/main";
import {withLayout} from "../layouts/main/withLayout";

const _Landing = ({ profile }: { profile: DeepRequired<IProfile> }) => (
    <>
        <Hero
            primary={profile.profile.profilePhoto.urlPrimary}
            secondary={profile.profile.profilePhoto.urlSecondary}
            bio={profile.profile.bio}
        />
        <MainContent str={profile.profile.rant.content} />
    </>
);

export const Landing = withLayout({ Layout: Main })(_Landing);
