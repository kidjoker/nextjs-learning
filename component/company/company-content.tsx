import classes from './company-content.module.css';

const CompanyContent = (props: React.ReactNode) => {
    return (
        <section className={classes.content}>
            {props}
        </section>
    );
};