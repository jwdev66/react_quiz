
export const getCleanString = (string) => {
    return string.replace(/&quot;/g, '"')
        .replace(/&amp;/g, "&")
        .replace(/&#039;/g, "'")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
};