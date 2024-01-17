import { useRouter } from 'next/router';
import AddEventForm from '@/components/addEventForm';
const axios = require('axios').default;

import { eventType } from '@/types';

const AddEventPage = () => {
  // const dispatch = useDispatch();
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
