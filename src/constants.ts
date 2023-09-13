export const BaseURL = 'https://osu.ppy.sh';

export const delay = async (ms: number) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}