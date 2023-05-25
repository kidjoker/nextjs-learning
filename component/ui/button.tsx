import Link from "next/link";
import classes from "./button.module.css";

export interface ButtonProps {
    link?: string;
    children: React.ReactNode;
    onClick?: () => void;
}

function Button(props: ButtonProps) {
    if(props.link) {
        return (
            <Link legacyBehavior href={props.link}>
                <a className={classes.btn}>{props.children}</a>
            </Link>
        );
    }
    else {
        return (
            <button className={classes.btn} onClick={props.onClick}>
                {props.children}
            </button>
        );
    }
}

export default Button;