import { eventType } from '@/types';
import classes from './eventTab.module.css';

type eventTabProps = {
  event: eventType;
};

const EventTab: React.FC<eventTabProps> = ({ event }) => {
  return (
    <li
      className={classes.event}
      style={{
        top: event.start * (100 / 60),
        height: event.duration * (100 / 60),
        width: event.width,
        left: event.left,
      }}>
      {event.title}
    </li>
  );
};
export default EventTab;
