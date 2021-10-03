import { Hero, MainContent } from "@views";

import { DeepRequired } from "utility-types";
import { IProfile } from "@data";
import React from "react";

interface ILanding {
    profile: DeepRequired<IProfile>;
}

export const Landing = ({ profile }: ILanding) => (
    <div>
        <Hero
            primary={profile.profile.profilePhoto.urlPrimary}
            secondary={profile.profile.profilePhoto.urlSecondary}
            bio={profile.profile.bio}
        />
        <MainContent str={profile.profile.rant.content} />
    </div>
);
