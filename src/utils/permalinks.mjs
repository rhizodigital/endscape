import { slug as slugify } from 'github-slugger';
import { SITE_CONFIG, BLOG_CONFIG } from 'src/consts';

export const BASE_PATH = SITE_CONFIG.basePath;
export const BLOG_INDEX = slugify(BLOG_CONFIG.index.pathname);
export const TAG_BASE = slugify(BLOG_CONFIG.tags.pathname);

const trimSlashes = (str) => {
    // remove slashes from beggining and end
    const regex = /^\/+|\/+$/g;
    return str.replace(regex, '');
}

const createPath = (...params) => {
    // ...parms creates array from all parameters
    const paths = params
        .map((el) => trimSlashes(el)) // Remove any slashes
        .filter((el) => !!el) // Remove empty strings
        .join('/'); // Join back together
    return '/' + paths + (SITE_CONFIG.trailingSlash && paths ? '/' : '');
}

export const getPermalink = (slug = '', type = 'page') => {
    let permalink;

    switch (type) {
        case 'blog_tag':
            permalink = createPath(BLOG_INDEX, TAG_BASE, slugify(slug))
            break;
        case 'blog_post':
            permalink = createPath(BLOG_INDEX, slugify(slug))
            break;
        case 'page':
        default:
            permalink = createPath(slug);
            break;
    }
    return definePermalink(permalink)
}

export const getBlogPermalink = () => getPermalink(BLOG_INDEX);

const definePermalink = (permalink) => createPath(BASE_PATH, permalink)