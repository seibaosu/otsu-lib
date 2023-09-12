import fetch from "node-fetch";

import { BaseURL } from '../../constants';

export const updateBeatmaps = async () => {

    try {

        const req = await fetch(`${BaseURL}/beatmapsets/search`);
        const res = await req.json();

        return {
            status: 200,
            data: res.beatmapsets
        }
        
    } catch (err) {
        return err;
    }
    
}