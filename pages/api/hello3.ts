import type { NextApiRequest, NextApiResponse } from 'next'
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, message } = req.body
  console.log('name: ', name);
  console.log('message: ', message);
 
  try {
    res.status(200).json({ greeting: `Hello, ${name}! ${message}` });
  } catch (err) {
    res.status(500).send({ error: 'Failed to fetch data' })
  }
}