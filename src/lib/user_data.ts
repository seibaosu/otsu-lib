import fetch from "node-fetch";
import { load } from 'cheerio';

import { BaseURL } from '../constants';

export const getUserData = async (userId: number) => {

    try {

        const req = await fetch(`${BaseURL}/users/${userId}`);

        if(req.status == 200) {

            const res = await req.text();
            const $ = load(res);

            const det = $('.osu-layout--full').attr('data-initial-data');

            return {
                status: 200,
                data: JSON.parse(`${det}`)
            }

        } else {

            return {
                status: 404,
                message: 'DATA_NOT_FOUND'
            }
        }
        
    } catch (e) {
        return e;
    }

}