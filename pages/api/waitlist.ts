import { MongoClient } from 'mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  message: string;
};

const url: string = process.env.DB_CLIENT;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    try {
      const data = req.body;

      const client = await MongoClient.connect(url);
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
