
export const SITE_CONFIG = {
    siteName: "Endscape",
    basePath: '/',
    trailingSlash: false,
    paginationShow: 4,
}

export const AUTHORS = [
    "Bianca Palade",
    "Michael Sables"
] as const;

export const BLOG_CONFIG = {
    postsPerPage: 2,
    index: {
        pathname: 'blog'
    },
    tags: {
        pathname: 'tag'
    }
}