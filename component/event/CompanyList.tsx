import { Event } from "@/data/eventsData";
import classes from './CompanyList.module.css'
import CompanyItemPage from "./CompanyItem";

interface CompanyListPageProps {
    events: Event[];
    onClick?: (eventId: string) => void;
}

function CompanyListPage(props: CompanyListPageProps) {
    return (
        <ul className={classes.list}>
            {props.events.map((event: Event) => {
                return (
                    <li key={event.id}>
                        <CompanyItemPage {...event} />
                    </li>
                );
            })}
        </ul>
    );
}

export default CompanyListPage;