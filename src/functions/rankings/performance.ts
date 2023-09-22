import fetch from "node-fetch";
import { load } from "cheerio";

import { BaseURL } from "../../constants";

export const rankingsByPerformance = async (mode: number, country: string = 'all') => {

    try {

        let strmode;
        strmode = mode === 0 ? 'osu' : mode === 1 ? 'taiko' : mode === 2 ? 'fruits' : mode === 3 ? 'mania' : mode;

        const req = await fetch(`${BaseURL}/rankings/${strmode}/performance?country=${country}`);
        const res = await req.text();

        const $ = load(res);

        const length = $('#scores > div > table > tbody > tr').length;

        if(length == 0) {

            return {
                status: 404,
                message: 'NO_DATA'
            }
        } else {

            const result = [];
            for(let i = 1; i <= length; i++) {

                let rank = $('#scores > div > table > tbody > tr:nth-child('+i+') > td.ranking-page-table__column.ranking-page-table__column--rank').text().trim().replace(/#/g, '');
                let user = $('#scores > div > table > tbody > tr:nth-child('+i+') > td:nth-child(2) > div > a.ranking-page-table__user-link-text.js-usercard').text().trim();
                let country = $('#scores > div > table > tbody > tr:nth-child('+i+') > td:nth-child(2) > div > a:nth-child(1) > span').attr('title');
                let accuracy = $('#scores > div > table > tbody > tr:nth-child('+i+') > td:nth-child(3)').text().trim();
                let playcount = $('#scores > div > table > tbody > tr:nth-child('+i+') > td:nth-child(4)').text().trim().replace(/,/g, '');
                let performance = $('#scores > div > table > tbody > tr:nth-child('+i+') > td.ranking-page-table__column.ranking-page-table__column--focused').text().trim().replace(/,/g, '');
                let ss = $('#scores > div > table > tbody > tr:nth-child('+i+') > td:nth-child(6)').text().trim();
                let s = $('#scores > div > table > tbody > tr:nth-child('+i+') > td:nth-child(7)').text().trim();
                let a = $('#scores > div > table > tbody > tr:nth-child('+i+') > td:nth-child(8)').text().trim();
            
                result.push({
                    rank: parseInt(rank),
                    user: user,
                    country: country,
                    accuracy: accuracy,
                    playcount: parseInt(playcount),
                    performance: parseInt(performance),
                    ss: parseInt(ss),
                    s: parseInt(s),
                    a: parseInt(a)
                });

            }

            return {
                status: 200,
                data: result
            }
        }
        
    } catch (err) {
        return err;
    }

}