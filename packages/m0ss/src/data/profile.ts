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
        bio: "Hi, I'm a full stack developer with a focus on web applications, infrastructure, data visualization, and creative programming. I am currently hard at work on the next big thing. You'll be hearing about it soon...",
        color: "#e91e63",
    },
};
