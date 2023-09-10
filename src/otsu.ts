import fetch from 'node-fetch';
import { load } from 'cheerio';

class Otsu {

    otsu: string;

    constructor() {

        this.otsu = 'https://osu.ppy.sh';

    }

    /**
    * @param {String} username - Osu account username
    */
    async user_id(username: string) {

        try {

            const req = await fetch(`${this.otsu}/u/${username}`);

            const res = req.status;

            if (res === 200) {

                const url = req.url;
                const id = url.split('/').pop();
                
                return {
                    status: 200,
                    message: 'USER_FOUND',
                    id: parseInt(`${id}`)
                }

            } else {

                return {
                    status: 404,
                    message: 'USER_NOT_FOUND',
                    id: null
                }

            }

        } catch (e) {
            return e;
        }

    }

    /**
    * @param {String} username - Osu account username
    */
    async user_data(username: string) {

        try {

            const userId = await this.user_id(username);
            if (userId.status === 404) {

                return {
                    status: 404,
                    message: 'USER_NOT_FOUND'
                }
            } else {

                const req = await fetch(`${this.otsu}/users/${userId.id}`);
    
                const res = await req.text();
                const $ = load(res);
    
                const det = $('.osu-layout--full').attr('data-initial-data');
                
                return {
                    status: 200,
                    message: 'USER_DATA_FOUND',
                    data: JSON.parse(`${det}`)
                }
                
            }
            
        } catch (e) {
            return e;
        }

    }

    async user_best_plays(username: string, mode: number = 0) {

        
        try {

            let strmode;
            strmode = mode === 0 ? 'osu' : mode === 1 ? 'taiko' : mode === 2 ? 'fruits' : mode === 3 ? 'mania' : mode;

            const userId = await this.user_id(username);
            if (userId.status === 404) {

                return {
                    status: 404,
                    message: 'USER_NOT_FOUND'
                }
            } else {

                const req = await fetch(`${this.otsu}/users/${userId.id}/scores/best?mode=${strmode}&limit=100`);
    
                const res = await req.json();
                if (res.length === 0) {
                    return {
                        status: 400,
                        message: 'NO_DATA'
                    }
                } else {

                    let replayId = [];
                    for (let i = 0; i < res.length; i++) {

                        const repId = await res[i];

                        replayId.push(repId);

                    }

                    return {
                        status: 200,
                        message: 'DATA_FOUND',
                        data: replayId
                    }

                }
                
            }


        } catch (e) {
            return e;
        }

    }

}

module.exports = Otsu;