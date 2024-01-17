import { MongoClient } from 'mongodb';

import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  message: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method === 'POST') {
    const data = req.body;
    console.log(data.id);
    const client = await MongoClient.connect(
      'mongodb+srv://Parf:1234qwer@cluster0.eduanuc.mongodb.net/calendar?retryWrites=true&w=majority'
    );

    const db = client.db();

    const eventsCollection = db.collection('events');
    await eventsCollection.deleteOne({ id: data.id });

    client.close();

    res.status(201).json({ message: 'Added new event' });
  }
};

export default handler;
