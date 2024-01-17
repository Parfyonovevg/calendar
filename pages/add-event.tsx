import { useRouter } from 'next/router';
import AddEventForm from '@/components/addEventForm';
import { eventType } from '@/types';

const AddEventPage = () => {
  const router = useRouter();
  const addEvent = (event: eventType) => {
    router.push('/');
  };
  return <AddEventForm addEventHandler={addEvent} />;
};
export default AddEventPage;
