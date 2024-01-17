import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import classes from './addEventForm.module.css';
import { eventType } from '@/types';

interface AddEventFormProps {
  addEventHandler: (event: eventType) => void;
}

const AddEventForm: React.FC<AddEventFormProps> = ({ addEventHandler }) => {
  const [title, setTitle] = useState('');
  const [start, setStart] = useState('');
  const [duration, setDuration] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const [hours, minutes] = start.split(':');
    const totalMinutes = (parseInt(hours) - 8) * 60 + parseInt(minutes);

    const addedEvent = {
      id: uuidv4(),
      title,
      start: totalMinutes + '',
      duration: duration,
      end: totalMinutes + +duration + '',
    };

    addEventHandler(addedEvent);
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <label className={classes.title}>Title</label>
      <input
        required
        className={classes.input}
        type='text'
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <label className={classes.start}>
        Start (from 08:00 to 16:45. step - 15min))
      </label>
      <input
        required
        className={classes.input}
        type='time'
        value={start}
        onChange={(event) => setStart(event.target.value)}
        min='08:00'
        max='16:45'
      />

      <label className={classes.duration}>Duration in minutes</label>
      <input
        required
        className={classes.input}
        type='number'
        min='0'
        max='570'
        value={duration}
        onChange={(event) => setDuration(event.target.value)}
      />

      <button type='submit' className={classes.button}>
        Submit
      </button>
    </form>
  );
};

export default AddEventForm;
