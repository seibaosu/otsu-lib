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
    async userId(username: string) {

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
    async dataUsers(username: string) {

        try {

            const userId = await this.userId(username);
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
                    data: JSON.parse(`${det}`)
                }
                
            }
            
        } catch (e) {
            return e;
        }

    }

}

module.exports = Otsu;