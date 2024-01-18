import { useRouter } from 'next/router';
import classes from './eventTab.module.css';
const axios = require('axios').default;
import { eventType } from '@/types';

type eventTabProps = {
  event: eventType;
};

const EventTab: React.FC<eventTabProps> = ({ event }) => {
  const router = useRouter();

  const deleteHandler = async () => {
    try {
      await axios.post('/api/delete-event', event);
      router.push('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <li
      className={classes.event}
      onClick={deleteHandler}
      style={{
        top: +event.start * (100 / 60),
        height: +event.duration * (100 / 60),
        width: event.width,
        left: event.left,
        maxHeight: '100%',
      }}>
      {event.title}
    </li>
  );
};
export default EventTab;
