import Head from 'next/head';
import classes from './homePage.module.css';
import Calendar from '@/components/calendar';
import Header from '@/components/header';
import { getEvents } from '@/utils/getEvents';
import { eventType } from '@/types';

interface HomeProps {
  events: eventType[];
}

const Home:React.FC<HomeProps> = ({ events }) => {
  return (
    <>
      <Head>
        <title>Calendar</title>
        <meta name='description' content='NextJS Test project' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <main className={classes.main}>
        <Header />
        <Calendar events={events} />
      </main>
    </>
  );
};

export const getStaticProps = async () => {
  const events = await getEvents();
  return {
    props: {
      events,
    },
  };
};

export default Home;