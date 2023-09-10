import fetch from 'node-fetch';

export class Otsu {

    otsu: string;

    constructor() {

        this.otsu = 'https://osu.ppy.sh';

    }

    
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

    


}