import { IProfile } from "@data";
import { Hero, MainContent } from "@views";
import React from "react";
import { DeepRequired } from "utility-types";

export const Landing = ({ profile }: { profile: DeepRequired<IProfile> }) => (
    <>
        <Hero
            primary={profile.profile.profilePhoto.urlPrimary}
            secondary={profile.profile.profilePhoto.urlSecondary}
            bio={profile.profile.bio}
        />

        <MainContent str={profile.profile.rant.content} />
    </>
);
