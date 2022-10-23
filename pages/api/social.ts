import type { NextApiRequest, NextApiResponse } from 'next';
import socialjson from '../../utils/social.json';

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    res.status(200).json(socialjson);
};