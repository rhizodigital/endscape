import type { CollectionEntry } from "astro:content";

export const sortBlogPosts = (a: CollectionEntry<'blog'>, b: CollectionEntry<'blog'>) => {
    return b.data.pubDate.getTime() - a.data.pubDate.getTime();
}

