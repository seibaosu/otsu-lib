import { getUserId, getUserData, getBestPlays, getFirstPlay, getRecentPlay, updateBeatmaps, rankingsByPerformance, codeCountry } from './functions';

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
    async user_first_place(username: string, mode: number = 0) {

        return getFirstPlay(username, mode);

    }

    /**
    * @param {String} username - Osu account username
    * @param {number} mode - Osu mode [ 0: osu!  1:Taiko  2:Catch  3:Mania ]
    */
    async user_recent_play(username: string, mode: number = 0) {

        return getRecentPlay(username, mode);

    }

    /**
     * 
     * Update latest beatmap uploaded
     */
    async beatmap_update() {

        return updateBeatmaps();

    }

    /**
     * 
     * Get top 50 players by performance
     */
    async rank_performance(mode: number = 0, country: string = 'all', variant: number = 0) {

        return rankingsByPerformance(mode, country, variant);
    }

}