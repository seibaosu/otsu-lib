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
exports.getUserId = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const constants_1 = require("../constants");
const getUserId = (username) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const req = yield (0, node_fetch_1.default)(`${constants_1.BaseURL}/u/${username}`);
        const res = req.status;
        if (res === 200) {
            const url = req.url;
            const id = url.split('/').pop();
            return {
                status: 200,
                id: parseInt(`${id}`)
            };
        }
        else {
            return {
                status: 404,
                message: 'USER_NOT_FOUND'
            };
        }
    }
    catch (err) {
        return new Error(err);
    }
});
exports.getUserId = getUserId;
