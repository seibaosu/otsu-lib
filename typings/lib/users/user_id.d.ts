export declare const getUserId: (username: string) => Promise<Error | {
    status: number;
    id: number;
    message?: undefined;
} | {
    status: number;
    message: string;
    id?: undefined;
}>;
