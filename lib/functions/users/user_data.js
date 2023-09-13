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
exports.getUserData = void 0;
const node_fetch_1 = require("node-fetch");
const cheerio_1 = require("cheerio");
const constants_1 = require("../../constants");
const getUserData = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const req = yield (0, node_fetch_1.default)(`${constants_1.BaseURL}/users/${userId}`);
        if (req.status == 200) {
            const res = yield req.text();
            const $ = (0, cheerio_1.load)(res);
            const det = $('.osu-layout--full').attr('data-initial-data');
            return {
                status: 200,
                data: JSON.parse(`${det}`)
            };
        }
        else {
            return {
                status: 404,
                message: 'DATA_NOT_FOUND'
            };
        }
    }
    catch (err) {
        return err;
    }
});
exports.getUserData = getUserData;
