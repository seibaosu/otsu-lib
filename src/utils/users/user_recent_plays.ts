import fetch from 'node-fetch';
import { BaseURL } from '../../constants';
import { delay } from '../../helpers';

export const getRecentPlay = async (userId: number, mode: number) => {

    try {

        let strmode;
        strmode = mode === 0 ? 'osu' : mode === 1 ? 'taiko' : mode === 2 ? 'fruits' : mode === 3 ? 'mania' : mode;

        let result: any[] = [];
        for (let i = 5; i < 500000; i += 50) {

            const req = await fetch(`${BaseURL}/users/${userId}/scores/recent?mode=${strmode}&limit=51&offset=${i}`)
            const res = await req.json();
            // if res is empty, break the loop
            if (res.length === 0) break;

            for (let j = 0; j < res.length; j++) {

                const arr = res[j];
                result.push(arr);

            }

            await delay(2000);

        }
        
        if (result.length == 0) {
            
            return {
                status: 404,
                message: 'NO_DATA'
            }
        } else {

            return {
                status: 200,
                data: result
            }
        }

    } catch (err) {
        return new Error(err);
    }
}