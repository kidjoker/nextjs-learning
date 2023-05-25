import { eventsData, Event } from "@/data/eventsData";
import classes from './CompanyItem.module.css'
import Button from "../ui/button";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right.icon";

const CompanyItemPage = (props: Event) => {
    const { id, name, description, products, location, createtime, image } = props

    const humanReadableDate = new Date(createtime).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
    
    const industryId = id.split('_')[0] + '-' + id.split('_')[1]

    return (
        <div className={classes.item}>
            <img src={`/${image}`} alt={name} />
            <div className={classes.content}>
                <h2>{name}</h2>
                <h2>{description}</h2>
                <div className={classes.date}>
                    <DateIcon />
                    <time>{humanReadableDate}</time>
                </div>
                <div className={classes.address}>
                    <AddressIcon />
                    <address>{location}</address>
                </div>
            </div>
            <div className={classes.actions}>
                {products && products.map((product, index) => (
                    <Button key={index} link={`/events/${industryId}/${product}`}>
                        <span>{product}</span>
                        <span className={classes.icon}><ArrowRightIcon /></span>
                    </Button>
                ))}
            </div> 
        </div>
    );
};

export default CompanyItemPage;