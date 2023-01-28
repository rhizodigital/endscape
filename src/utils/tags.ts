import type { CollectionEntry } from "astro:content";
import { slug } from "github-slugger";

export function getAllTags(posts: CollectionEntry<"blog">[]) {
  const uniqueTags = new Map();

  posts.forEach((post) => {
    if (post.data.tags && Array.isArray(post.data.tags)) {
      post.data.tags.forEach((tag: string) => {
        if (!uniqueTags.has(slug(tag))) {
          uniqueTags.set(slug(tag), tag);
        }
      });
    }
  });

  return Array.from(uniqueTags);
}

export function filterByTag(tag: string, posts: CollectionEntry<"blog">[]) {
  const tagLower = tag.toLowerCase();

  return posts.filter((post) =>
    post.data.tags.map((ele) => ele.toLowerCase()).includes(tagLower)
  );
}
