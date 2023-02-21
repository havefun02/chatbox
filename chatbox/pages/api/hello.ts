// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  id: number;
  name: string;
};
const posts = [
  {
    id: 1,
    name: 'Nextjs is awesome'
  },
  {
    id: 2,
    name: 'Using TypeScript with Nextjs'
  },
  {
    id: 3,
    name: 'GraphQL Vs REST'
  },
  {
    id: 4,
    name: 'Bridging in React Native'
  }
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  res.status(200).json(posts);
}
