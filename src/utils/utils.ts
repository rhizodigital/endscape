
export const trimPublic = (path: string) :string => {
    const str = "public"
    const ind = path.indexOf(str);
    if (path.includes(str)) {
        return path.substring(str.length + ind)
    }
    return path
}