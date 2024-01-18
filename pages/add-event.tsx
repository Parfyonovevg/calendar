import { useRouter } from 'next/router';
const axios = require('axios').default;
import AddEventForm from '@/components/addEventForm';

import { eventType } from '@/types';

const AddEventPage = () => {
  const router = useRouter();
  const addEventHandler = async (enteredData: eventType) => {
    try {
      await axios.post('/api/send-event', enteredData);
      router.push('/');
    } catch (error) {
      console.error(error);
    }
  };

  return <AddEventForm addEventHandler={addEventHandler} />;
};
export default AddEventPage;
