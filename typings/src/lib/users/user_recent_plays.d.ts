export declare const getRecentPlay: (userId: number, mode: number) => Promise<Error | {
    status: number;
    message: string;
    data?: undefined;
} | {
    status: number;
    data: any[];
    message?: undefined;
}>;
