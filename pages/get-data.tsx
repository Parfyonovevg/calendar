import { getEvents } from '@/utils/getEvents';
import { eventType } from '@/types';

interface GetDataProps {
  fetchedEvents: eventType[];
}

const GetData: React.FC<GetDataProps> = ({ fetchedEvents }) => {
  const data = JSON.stringify(
    fetchedEvents.map((event) => ({
      title: event.title,
      start: event.start,
      duration: event.duration,
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
