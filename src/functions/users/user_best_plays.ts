import fetch from 'node-fetch';
import { BaseURL } from '../../constants';

import { getUserId } from './user_id';

export const getBestPlays = async (username: string, mode: number) => {

    try {

        let strmode;
        strmode = mode === 0 ? 'osu' : mode === 1 ? 'taiko' : mode === 2 ? 'fruits' : mode === 3 ? 'mania' : mode;

        const userId = await getUserId(username);
        if (userId.status == 404) {

            return {
                status: 400,
                message: 'USER_NOT_FOUND'
            }

        } else {

            const req = await fetch(`${BaseURL}/users/${userId.id}/scores/best?mode=${strmode}&limit=100`);
            const res = await req.json();

            let replayId: any = [];
            for (let i = 0; i < res.length; i++) {

                const repId = await res[i];

                replayId.push(repId);

            }

            if (replayId.length == 0) {

                return {
                    status: 404,
                    message: 'NO_DATA'
                }

            } else {

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