"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Otsu = void 0;
const functions_1 = require("./functions");
class Otsu {
    constructor() { }
    /**
    * @param {String} username - Osu account username
    */
    user_id(username) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, functions_1.getUserId)(username);
        });
    }
    /**
    * @param {number} userId - Get it from user_id
    */
    user_data(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, functions_1.getUserData)(userId);
        });
    }
    /**
    * @param {number} userId - Get it from user_id
    * @param {number} mode - Osu mode [ 0: osu!  1:Taiko  2:Catch  3:Mania ]
    */
    user_best_plays(userId, mode = 0) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, functions_1.getBestPlays)(userId, mode);
        });
    }
    /**
    * @param {number} userId - Get it from user_id
    * @param {number} mode - Osu mode [ 0: osu!  1:Taiko  2:Catch  3:Mania ]
    */
    user_first_place(userId, mode = 0) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, functions_1.getFirstPlay)(userId, mode);
        });
    }
    /**
    * @param {number} userId - Get it from user_id
    * @param {number} mode - Osu mode [ 0: osu!  1:Taiko  2:Catch  3:Mania ]
    */
    user_recent_play(userId, mode = 0) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, functions_1.getRecentPlay)(userId, mode);
        });
    }
    /**
     *
     * Update latedt beatmap uploaded
     */
    beatmap_update() {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, functions_1.updateBeatmaps)();
        });
    }
}
exports.Otsu = Otsu;
