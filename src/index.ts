import { getUserId, getUserData, getBestPlays, getFirstPlay, getRecentPlay, updateBeatmaps } from './utils/index';

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

    /**
    * @param {number} userId - Get it from user_id
    * @param {number} mode - Osu mode [ 0: osu!  1:Taiko  2:Catch  3:Mania ]
    */
    async user_first_place(userId: number, mode: number = 0) {

        return getFirstPlay(userId, mode);

    }

    /**
    * @param {number} userId - Get it from user_id
    * @param {number} mode - Osu mode [ 0: osu!  1:Taiko  2:Catch  3:Mania ]
    */
    async user_recent_play(userId: number, mode: number = 0) {

        return getRecentPlay(userId, mode);

    }

    /**
     * 
     * Update latedt beatmap uploaded
     */
    async beatmap_update() {

        return updateBeatmaps();

    }

}

module.exports = Otsu;