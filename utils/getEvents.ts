import { MongoClient } from 'mongodb';

export const getEvents = async () => {
  const client = await MongoClient.connect(
    'mongodb+srv://Parf:1234qwer@cluster0.eduanuc.mongodb.net/calendar?retryWrites=true&w=majority'
  );

  const db = client.db();

  const eventsCollection = db.collection('events');

  const events = await eventsCollection.find().toArray();

  client.close();

  const updatedEvents = events.map((event) => ({
    title: event.title,
    start: +event.start,
    duration: +event.duration,
    end: +event.end,
    id: event.id,
  }));

  return updatedEvents;
};
