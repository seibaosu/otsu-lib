import { getUserId, getUserData, getBestPlays } from './lib/index';

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

    /**
    * @param {number} userId - Get it from user_id
    * @param {number} mode - Osu mode [ 0: osu!  1:Taiko  2:Catch  3:Mania ]
    */
    async user_best_plays(userId: number, mode: number = 0) {

        return getBestPlays(userId, mode);

    }

}

module.exports = Otsu;