import fetch from 'node-fetch';
import { BaseURL } from '../../constants';

export const getUserId = async (username: string) => {

    try {

        const req = await fetch(`${BaseURL}/u/${username}`);
        const res = req.status;
        if (res === 200) {

            const url = req.url;
            const id = url.split('/').pop();
            
            return {
                status: 200,
                id: parseInt(`${id}`)
            }

        } else {

            return {
                status: 404,
                message: 'USER_NOT_FOUND'
            }

        }

    } catch (err) {
        return new Error(err);
    }

}