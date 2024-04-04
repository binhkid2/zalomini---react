export interface Images {
    id: number;
    src: string;
    alt: string;
}

export function ConvertToImagesJSON(urls: string | string[]): Images[] {
    if (!Array.isArray(urls)) {
        // If it's a single URL, convert it to an array
        urls = [urls];
    }
    const result: Images[] = [];

    // Iterate over each URL and create an object with id, src, and empty alt
    urls.forEach((url, index) => {
        result.push({
            id: index + 1, // Start id from 1
            src: url,
            alt: ""
        });
    });

    return result;
}
