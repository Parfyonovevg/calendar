import EventTab from './eventTab';
import classes from './calendar.module.css';
import { setSizeAndPosition } from '@/utils/setSizeAndPosition';
import { getEvents } from '@/utils/getEvents';
import { eventType } from '@/types';
const hours = ['08', '09', '10', '11', '12', '01', '02', '03', '04', '05'];

interface CalendarProps {
  events: eventType[];
}
const Calendar: React.FC<CalendarProps> = ({ events }) => {
  const updatedEvents = setSizeAndPosition(events);
  return (
    <main className={classes.calendar}>
      <ul className={classes.hours}>
        {hours.map((hour) => (
          <li key={hour}>
            <div>
              <hr />
              <p className={classes.hour}>{hour + ':00'}</p>
            </div>
            {hour !== '05' && <p>{hour + ':30'}</p>}
          </li>
        ))}
      </ul>
      <ul>
        {updatedEvents.map((event) => (
          <EventTab key={event.id} event={event} />
        ))}
      </ul>
    </main>
  );
};

export default Calendar;