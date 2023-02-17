import type { NextApiRequest, NextApiResponse } from 'next';
import { Client } from '@hubspot/api-client';

type Data = {
  message: string;
};

const token = process.env.HUBSPOT_TOKEN;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    try {
      const { email } = req.body;

      const properties = {
        email: email,
        firstname: email,
        contact_type__impact_finance_: 'User/Researcher',
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
