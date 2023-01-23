// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    const data = req.body;
    const { email } = data;
    res.status(200).json({ name: 'John Doe' });
  }
}

// "mongodb+srv://bcornick:dFwCz8n1x4h1K0rv@intheory.4xsak5a.mongodb.net/?retryWrites=true&w=majority"
