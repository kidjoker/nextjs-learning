import { useRouter } from 'next/router';
import { eventsData } from '../../data/eventsData';
import CompanyListPage from '@/component/event/CompanyList';
import CompaniesSearch from '@/component/event/Company-search';

const AllEventsPage = () => {
  const router = useRouter();

  const clickHandler = (eventId: string) => {
    router.push('/events/[eventId]', `/events/${eventId}`);
  };

  const findEventsHandler = (year: string, month: string) => {
    const fullPath = `/events/${year}/${month}/filter`;
    router.push(fullPath);
  }

  return (
    <div>
        <CompaniesSearch onSearch={findEventsHandler}/>
        <CompanyListPage events={eventsData} onClick={clickHandler} />
    </div>
  );
};

export default AllEventsPage;
