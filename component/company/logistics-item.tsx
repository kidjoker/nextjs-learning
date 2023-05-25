import classes from './logistics-item.module.css';

const LogisticsItem = (props: React.ReactNode) => {
    return (
        <li className={classes.item}>
            <span className={classes.content}>{props}</span>
        </li>
    );
};

export default LogisticsItem;
