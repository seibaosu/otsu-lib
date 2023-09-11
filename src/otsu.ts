import { getUserId, getUserData } from './lib/index';

class Otsu {

    constructor() {}

    /**
    * @param {String} username - Osu account username
    */
    async user_id(username: string) {

        return getUserId(username);

    }

    /**
    * @param {number} userId - Get it from user_id
    */
    async user_data(userId: number) {

        return getUserData(userId);

    }

    // async user_best_plays(username: string, mode: number = 0) {

        
    //     try {

    //         let strmode;
    //         strmode = mode === 0 ? 'osu' : mode === 1 ? 'taiko' : mode === 2 ? 'fruits' : mode === 3 ? 'mania' : mode;

    //         const userId = await this.user_id(username);
    //         if (userId.status === 404) {

    //             return {
    //                 status: 404,
    //                 message: 'USER_NOT_FOUND'
    //             }
    //         } else {

    //             const req = await fetch(`${this.otsu}/users/${userId.id}/scores/best?mode=${strmode}&limit=100`);
    
    //             const res = await req.json();
    //             if (res.length === 0) {
    //                 return {
    //                     status: 400,
    //                     message: 'NO_DATA'
    //                 }
    //             } else {

    //                 let replayId = [];
    //                 for (let i = 0; i < res.length; i++) {

    //                     const repId = await res[i];

    //                     replayId.push(repId);

    //                 }

    //                 return {
    //                     status: 200,
    //                     message: 'DATA_FOUND',
    //                     data: replayId
    //                 }

    //             }
                
    //         }


    //     } catch (e) {
    //         return e;
    //     }

    // }

}

module.exports = Otsu;