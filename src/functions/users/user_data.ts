import fetch from "node-fetch";
import { load } from 'cheerio';

import { BaseURL } from '../../constants';
import { getUserId } from "./user_id";

export const getUserData = async (username: string) => {

    try {

        const userId = await getUserId(username);
        if (userId.status == 404) {

            return {
                status: 404,
                message: 'DATA_NOT_FOUND'
            }

        } else {

            const req = await fetch(`${BaseURL}/users/${userId.id}`);

            const res = await req.text();
            const $ = load(res);

            const det = $('.osu-layout--full').attr('data-initial-data');

            return {
                status: 200,
                data: JSON.parse(`${det}`)
            }

        }
        
    } catch (err) {
        return err;
    }

}