import Head from 'next/head';
import classes from './homePage.module.css';
import Calendar from '@/components/calendar';
import Header from '@/components/header';
import { getEvents } from '@/utils/getEvents';
// import { sentEventsToDatabase } from '@/utils/sentEvents';
import { eventType } from '@/types';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { addEvent, setEvents } from '@/eventsSlice';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

interface HomeProps {
  fetchedEvents: eventType[];
}

const Home: React.FC<HomeProps> = ({ fetchedEvents }) => {
  // const events = useSelector((state: RootState) => state.events.events);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   sentEventsToDatabase(events);
  // }, [events]);

  useEffect(() => {
    dispatch(setEvents(fetchedEvents));
  }, [fetchedEvents]);

  return (
    <>
      <Head>
        <title>Calendar</title>
        <meta name='description' content='NextJS Test project' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <main className={classes.main}>
        <Header />
        <Calendar />
      </main>
    </>
  );
};

export const getStaticProps = async () => {
  const events = await getEvents();
  return {
    props: {
      fetchedEvents: events,
    },
  };
};

export default Home;
