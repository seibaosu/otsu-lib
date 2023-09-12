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
exports.updateBeatmaps = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const constants_1 = require("../../constants");
const updateBeatmaps = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const req = yield (0, node_fetch_1.default)(`${constants_1.BaseURL}/beatmapsets/search`);
        const res = yield req.json();
        return {
            status: 200,
            data: res.beatmapsets
        };
    }
    catch (err) {
        return err;
    }
});
exports.updateBeatmaps = updateBeatmaps;
