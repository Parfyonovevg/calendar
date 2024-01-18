import classes from './calendar.module.css';
import EventTab from './eventTab';
import { setSizeAndPosition } from '@/utils/setSizeAndPosition';

const hours = ['08', '09', '10', '11', '12', '01', '02', '03', '04', '05'];
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

const Calendar: React.FC = () => {
  const events = useSelector((state: RootState) => state.events.events);
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
