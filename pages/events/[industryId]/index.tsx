import { useRouter } from 'next/router';
import { eventsData, Event } from '../../../data/eventsData';
import CompanyListPage from '@/component/event/CompanyList';

const EventPage = () => {
  const router = useRouter();
  const { industryId } = router.query;
 
  const events = eventsData.filter((event: Event) => {
      return event.id.startsWith(industryId as string);
  });

  if (!events) {
    return <div>Event not found!</div>;
  }

  const clickHandler = (eventId: string) => {
    router.push(`/events/[industryId]/[companyId]`, `/events/${industryId}/${eventId}`);
  };

  return (
    <CompanyListPage events={events} onClick={clickHandler} />
  );
};

export default EventPage;
