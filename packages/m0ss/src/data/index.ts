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
            urlPrimary:
                "https://honeyy.s3.us-west-2.amazonaws.com/DSC_7024_11e051f8e4.jpeg",
            urlSecondary: "https://source.unsplash.com/random/600x600",
        },
        email: "andrew@m0ss.dev",
        rant: {
            url: "https://honeyy.s3.us-west-2.amazonaws.com/landing_10dadf29c8.markdown",
        },
        bio: "Hi, I'm a full stack developer with a focus on web applications, infrastructure, data visualization, and creative programming. I am currently hard at work on the next big thing. You'll be hearing about it soon...",
        color: "#fffff",
    },
};
