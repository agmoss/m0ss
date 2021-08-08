import { DeepRequired } from "utility-types";
import { Hero } from "../views/Hero";
import { IProfile } from "../data";
import { MainContent } from "../views/MainContent";
import React from "react";

interface ILanding {
    profile: DeepRequired<IProfile>;
}

export const Landing = ({ profile }: ILanding) => {
    return (
        <div>
            <Hero
                primary={profile.profile.profilePhoto.urlPrimary}
                secondary={profile.profile.profilePhoto.urlSecondary}
                bio={profile.profile.bio}
            />
            <MainContent str={profile.profile.rant.content} />
        </div>
    );
};
