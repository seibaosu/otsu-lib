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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
const cheerio_1 = require("cheerio");
class Otsu {
    constructor() {
        this.otsu = 'https://osu.ppy.sh';
    }
    /**
    * @param {String} username - Osu account username
    */
    user_id(username) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const req = yield (0, node_fetch_1.default)(`${this.otsu}/u/${username}`);
                const res = req.status;
                if (res === 200) {
                    const url = req.url;
                    const id = url.split('/').pop();
                    return {
                        status: 200,
                        message: 'USER_FOUND',
                        id: parseInt(`${id}`)
                    };
                }
                else {
                    return {
                        status: 404,
                        message: 'USER_NOT_FOUND',
                        id: null
                    };
                }
            }
            catch (e) {
                return e;
            }
        });
    }
    /**
    * @param {String} username - Osu account username
    */
    user_data(username) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userId = yield this.user_id(username);
                if (userId.status === 404) {
                    return {
                        status: 404,
                        message: 'USER_NOT_FOUND'
                    };
                }
                else {
                    const req = yield (0, node_fetch_1.default)(`${this.otsu}/users/${userId.id}`);
                    const res = yield req.text();
                    const $ = (0, cheerio_1.load)(res);
                    const det = $('.osu-layout--full').attr('data-initial-data');
                    return {
                        status: 200,
                        message: 'USER_DATA_FOUND',
                        data: JSON.parse(`${det}`)
                    };
                }
            }
            catch (e) {
                return e;
            }
        });
    }
    user_best_plays(username, mode = 0) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let strmode;
                strmode = mode === 0 ? 'osu' : mode === 1 ? 'taiko' : mode === 2 ? 'fruits' : mode === 3 ? 'mania' : mode;
                const userId = yield this.user_id(username);
                if (userId.status === 404) {
                    return {
                        status: 404,
                        message: 'USER_NOT_FOUND'
                    };
                }
                else {
                    const req = yield (0, node_fetch_1.default)(`${this.otsu}/users/${userId.id}/scores/best?mode=${strmode}&limit=100`);
                    const res = yield req.json();
                    if (res.length === 0) {
                        return {
                            status: 400,
                            message: 'NO_DATA'
                        };
                    }
                    else {
                        let replayId = [];
                        for (let i = 0; i < res.length; i++) {
                            const repId = yield res[i];
                            replayId.push(repId);
                        }
                        return {
                            status: 200,
                            message: 'DATA_FOUND',
                            data: replayId
                        };
                    }
                }
            }
            catch (e) {
                return e;
            }
        });
    }
}
module.exports = Otsu;
