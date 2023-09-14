import { getUserId, getUserData, getBestPlays, getFirstPlay, getRecentPlay, updateBeatmaps } from './functions';

export class Otsu {

    constructor() {}

    /**
    * @param {String} username - Osu account username
    */
    async user_id(username: string) {

        return getUserId(username);

    }

    /**
    * @param {String} username - Osu account username
    */
    async user_data(username: string) {

        return getUserData(username);

    }

    /**
    * @param {String} username - Osu account username
    * @param {number} mode - Osu mode [ 0: osu!  1:Taiko  2:Catch  3:Mania ]
    */
    async user_best_plays(username: string, mode: number = 0) {

        return getBestPlays(username, mode);

    }

    /**
    * @param {String} username - Osu account username
    * @param {number} mode - Osu mode [ 0: osu!  1:Taiko  2:Catch  3:Mania ]
    */
    async user_first_place(username: number, mode: number = 0) {

        return getFirstPlay(username, mode);

    }

    /**
    * @param {String} username - Osu account username
    * @param {number} mode - Osu mode [ 0: osu!  1:Taiko  2:Catch  3:Mania ]
    */
    async user_recent_play(username: number, mode: number = 0) {

        return getRecentPlay(username, mode);

    }

    /**
     * 
     * Update latedt beatmap uploaded
     */
    async beatmap_update() {

        return updateBeatmaps();

    }

}