import { MongoClient } from 'mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    try {
      const data = req.body;

      const client = await MongoClient.connect(
        'mongodb+srv://bcornick:dFwCz8n1x4h1K0rv@intheory.4xsak5a.mongodb.net/waitlist?retryWrites=true&w=majority'
      );
      const db = client.db();

      const waitlistCollection = db.collection('waitlist');

      await waitlistCollection.insertOne(data);

      client.close();

      res.status(201).json({ message: 'Email added to wait list' });
    } catch {
      res.status(500).json({ message: 'Error adding email' });
    }
  }
}
