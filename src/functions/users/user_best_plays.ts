import fetch from 'node-fetch';
import { BaseURL } from '../../constants';

export const getBestPlays = async (userId: number, mode: number) => {

    try {

        let strmode;
        strmode = mode === 0 ? 'osu' : mode === 1 ? 'taiko' : mode === 2 ? 'fruits' : mode === 3 ? 'mania' : mode;

        const req = await fetch(`${BaseURL}/users/${userId}/scores/best?mode=${strmode}&limit=100`);
    
        if (req.status == 200) {

            const res = await req.json();
            if (res.length === 0) {
                return {
                    status: 400,
                    message: 'NO_DATA'
                }
            } else {

                let replayId = [];
                for (let i = 0; i < res.length; i++) {

                    const repId = await res[i];

                    replayId.push(repId);

                }

                return {
                    status: 200,
                    data: replayId
                }

            }
        }

    } catch (err) {
        return err;
    }
}