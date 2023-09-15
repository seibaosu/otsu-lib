import fetch from "node-fetch";
import { load } from "cheerio";

import { BaseURL } from "../../constants";

export const rankingsByPerformance = async (mode: number) => {

    try {

        let strmode;
        strmode = mode === 0 ? 'osu' : mode === 1 ? 'taiko' : mode === 2 ? 'fruits' : mode === 3 ? 'mania' : mode;

        const req = await fetch(`${BaseURL}/rankings/${strmode}/performance`);
        const res = await req.text();

        const $ = load(res);

        const coba = $('#scores > div > table > tbody > tr').length;

        return coba;
        
    } catch (err) {
        return err;
    }

}