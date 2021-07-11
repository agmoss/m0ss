export interface ITargetProfile {
    profile: {
        firstName: string;
        lastName: string;
        profilePhoto: {
            blobs: Blob[];
            url: string;
        };
        email: string;
        rant: {
            content: string;
            url: string;
        };
        bio: string;
        color: string;
    };
}

export interface IProfile {
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
            content: string;
        };
        bio: string;
        color: string;
    };
}

export interface IArticle {
    id: number;
    title: string;
    slug: string;
    description: string;
    internalLink: string | null;
    image: string;
    markdown: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    externalLink: string | null;
}

export interface IArticleTarget extends IArticle {
    _markdown: {
        content: string | null;
    };
}

export interface IArticles {
    articles: IArticle[];
}

export interface IMedia {
    id: number;
    title: string;
    asset: string;
    isActive: boolean;
    preview: string;
}
