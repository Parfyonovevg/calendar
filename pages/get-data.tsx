import { getEvents } from '@/utils/getEvents';
import { eventType } from '@/types';

interface GetDataProps {
  fetchedEvents: eventType[];
}

const GetData: React.FC<GetDataProps> = ({ fetchedEvents }) => {
  const data = JSON.stringify(
    fetchedEvents.map((event) => ({
      start: event.start,
      duration: event.duration,
      title: event.title,
    })),
    null,
    2
  );

  return <div>{data}</div>;
};
export default GetData;

export const getStaticProps = async () => {
  const events = await getEvents();
  return {
    props: {
      fetchedEvents: events,
    },
  };
};
