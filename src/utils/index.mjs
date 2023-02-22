import path from "path";
import util from 'util';
import { promises as fs } from "fs";
import glob from "glob";
import grayMatter from "gray-matter";
import { getPermalink } from "./permalinks.mjs";

const globber = util.promisify(glob);

(async function() {
    const srcPath = path.join(process.cwd(), "src");
    const contentPath = path.join(srcPath, "content");
    const publicPath = path.join(process.cwd(), "public");
    const contentGlob = path.join(contentPath, "blog/*.{md,mdx}");
    const searchIndex = path.join(publicPath, "search-index.json");
    const filePaths =  await globber(contentGlob);

    if (filePaths.length) {
        const files = filePaths.map(
            async (filePath) => {
                return {
                    path: path.basename(filePath, '.md'),
                    data: await fs.readFile(filePath, "utf8")
                }
            }

        );
        const index = [];

        for await (const file of files) {

            const { 
                data: { title, description, tags, authors, pubDate },
            } = grayMatter(file.data);

            index.push({
                title,
                description: description,
                tags: tags,
                authors: authors,
                pubDate: pubDate,
                slug: file.path,
            });
        }
        await fs.writeFile(searchIndex, JSON.stringify(index));

        console.log(`Indexed ${index.length} files from ${contentPath} to ${searchIndex}`);
    }

})();