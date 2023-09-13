export declare class Otsu {
    constructor();
    /**
    * @param {String} username - Osu account username
    */
    user_id(username: string): Promise<unknown>;
    /**
    * @param {number} userId - Get it from user_id
    */
    user_data(userId: number): Promise<unknown>;
    /**
    * @param {number} userId - Get it from user_id
    * @param {number} mode - Osu mode [ 0: osu!  1:Taiko  2:Catch  3:Mania ]
    */
    user_best_plays(userId: number, mode?: number): Promise<unknown>;
    /**
    * @param {number} userId - Get it from user_id
    * @param {number} mode - Osu mode [ 0: osu!  1:Taiko  2:Catch  3:Mania ]
    */
    user_first_place(userId: number, mode?: number): Promise<unknown>;
    /**
    * @param {number} userId - Get it from user_id
    * @param {number} mode - Osu mode [ 0: osu!  1:Taiko  2:Catch  3:Mania ]
    */
    user_recent_play(userId: number, mode?: number): Promise<unknown>;
    /**
     *
     * Update latedt beatmap uploaded
     */
    beatmap_update(): Promise<unknown>;
}
