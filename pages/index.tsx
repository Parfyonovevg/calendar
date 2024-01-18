import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import classes from './homePage.module.css';
import Calendar from '@/components/calendar';
import Header from '@/components/header';
import { getEvents } from '@/utils/getEvents';
import { eventType } from '@/types';
import { setEvents } from '@/store/eventsSlice';
import { setUser } from '@/store/userSlice';
import { RootState } from '@/store/store';

interface HomeProps {
  fetchedEvents: eventType[];
}

const Home: React.FC<HomeProps> = ({ fetchedEvents }) => {
  const router = useRouter();
  const user = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      dispatch(setUser(JSON.parse(user)));
    }
    setLoading(false);
  }, []);

  if (!loading && !user) {
    router.replace('/login-page');
  }

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
      {user && (
        <main className={classes.main}>
          <Header />
          <Calendar />
        </main>
      )}
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
