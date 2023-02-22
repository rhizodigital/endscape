/// <reference path="../.astro/types.d.ts" />
/// <reference types="@astrojs/image/client" />

interface ImportMetaEnv {
    readonly BLOG_PATH: string;
    readonly TAG_PATH: string;
    readonly POSTS_PER_PAGE: number;
}
interface ImportMeta {
    readonly env: ImportMetaEnv;
}