import type { Page } from "astro"
import { SITE_CONFIG } from "src/consts"

export type PaginationPage = {
    pageNum: number
    url: string
}


export const getPaginationPages = ({ lastPage: last,  currentPage: current }: Page, baseUrl: string) => {
    const vBvA = Math.floor(SITE_CONFIG.paginationShow / 2);
    const allPages = new Array()


    let n = 0;

    while(n < last) {
        n++
        if (n > 1) {
            allPages.push({ pageNum: n, url: `${baseUrl}/${n}`})
        } else {
            allPages.push({ pageNum: n, url: baseUrl })
        };
    };

    const pages: { [index: string]: PaginationPage[] } = {}
    pages.before = allPages.slice(Math.max(current - (vBvA + 1), 0), current -1);
    pages.after = allPages.slice(current, current + vBvA);

    return pages;
}