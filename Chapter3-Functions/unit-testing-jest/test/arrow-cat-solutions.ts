export const capitalize = (sentence: string) => {
    return `${sentence.charAt(0).toUpperCase()}${sentence
    .slice(1)
    .toLowerCase()}`;
    }