export type IProfile = {
    profile: {
        firstName: string;
        lastName: string;
        profilePhoto: {
            urlPrimary: string;
            urlSecondary: string;
        };
        email: string;
        rant: {
            url: string;
            content?: string;
        };
        bio: string;
        color: string;
    };
};

export const landingData: IProfile = {
    profile: {
        firstName: "Andrew",
        lastName: "Moss",
        profilePhoto: {
            urlPrimary: "/andrew-moss.JPEG",
            urlSecondary: "/andrew-moss-ph.JPEG",
        },
        email: "andrew@m0ss.dev",
        rant: {
            url: "https://m0ss.blob.core.windows.net/media/landing.md",
        },
        bio: "Hi, I'm a software developer with a focus on web applications, infrastructure, data visualization, and creative programming. I am currently focussing my time on the startup space as a fractional CTO. Outside of work I collaborate on open source contributions in the JS/TS & Python ecosystems. Stay tuned!",
        color: "#e91e63",
    },
};
