// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import projects from '../../utils/projects.json';

export default function project(
    req: NextApiRequest,
    res: NextApiResponse
) {
    res.status(200).json(projects);
}
