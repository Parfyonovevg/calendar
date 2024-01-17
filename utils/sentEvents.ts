import { MongoClient } from 'mongodb';

export const sentEventToDatabase = async (event) => {
  const client = await MongoClient.connect(
    'mongodb+srv://Parf:1234qwer@cluster0.eduanuc.mongodb.net/calendar?retryWrites=true&w=majority'
  );
  const db = client.db();
  const eventsCollection = db.collection('events');
  await eventsCollection.insertOne(event);
  client.close();
};
