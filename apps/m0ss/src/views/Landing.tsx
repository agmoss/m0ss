import React from "react";
import { DeepRequired } from "utility-types";
import AM from "../../public/andrew-moss.jpeg";
import { Hero, MainContent } from "@m0ss/core";
import { IProfile } from "../data";

export const Landing = ({ profile }: { profile: DeepRequired<IProfile> }) => {
    const fullName = `${profile.profile.firstName} ${profile.profile.lastName}`;

    return (
        <>
            <Hero bio={profile.profile.bio} image={AM} name={fullName} />
            <MainContent str={profile.profile.rant.content} />
        </>
    );
};
