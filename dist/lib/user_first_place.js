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
exports.getFirstPlay = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const constants_1 = require("../constants");
const helpers_1 = require("../helpers");
const getFirstPlay = (userId, mode) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let strmode;
        strmode = mode === 0 ? 'osu' : mode === 1 ? 'taiko' : mode === 2 ? 'fruits' : mode === 3 ? 'mania' : mode;
        let result = [];
        for (let i = 5; i < 50000; i += 50) {
            const req = yield (0, node_fetch_1.default)(`${constants_1.BaseURL}/users/${userId}/scores/firsts?mode=${strmode}&limit=51&offset=${i}`);
            const res = yield req.json();
            // if res is empty, break the loop
            if (res.length === 0)
                break;
            for (let j = 0; j < res.length; j++) {
                const arr = res[j];
                result.push(arr);
            }
            yield (0, helpers_1.delay)(2000);
        }
        return result;
    }
    catch (err) {
        return new Error(err);
    }
});
exports.getFirstPlay = getFirstPlay;
