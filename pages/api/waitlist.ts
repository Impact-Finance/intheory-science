// import { MongoClient } from 'mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';
import { Client } from '@hubspot/api-client';

type Data = {
  message: string;
};

// const url: string = process.env.DB_CLIENT;
const token = process.env.HUBSPOT_TOKEN;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    try {
      const data = req.body;

      // For adding to MongoDB
      // const client = await MongoClient.connect(url);
      // const db = client.db();

      // const waitlistCollection = db.collection('waitlist');

      // await waitlistCollection.insertOne(data);

      // client.close();

      const properties = {
        email: data.email,
        firstname: 'Waitlist Submission',
      };
      const SimplePublicObjectInput = { properties };

      const hubspotClient = new Client({ accessToken: token });

      await hubspotClient.crm.contacts.basicApi.create(SimplePublicObjectInput);

      res.status(201).json({ message: 'Email added to wait list' });
    } catch {
      res.status(500).json({ message: 'Error adding email' });
    }
  }
}
