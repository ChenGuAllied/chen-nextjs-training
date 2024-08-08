import type { NextApiRequest, NextApiResponse } from 'next'
import { NextRequest, NextResponse } from 'next/server';
 
type ResponseData = {
  message: string
}
 
// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<ResponseData>
// ) {
//   res.status(200).json({ message: 'Hello from Next.js!' })
// }

export default async function postHandler(req: NextRequest, res: NextResponse) {
  const data = await req.json();
  console.log(data);
  return new Response("Hello, Next.js!");
}