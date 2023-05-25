import Button from "../ui/button"
import classes from "./company-search.module.css"
import { useRef } from "react"

interface CompanySearchProps {
    onSearch: (year: string, month: string) => void;
}

const CompaniesSearch = (props: CompanySearchProps) => {
    const yearInputRef = useRef<HTMLSelectElement>(null);
    const monthInputRef = useRef<HTMLSelectElement>(null);

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const selectedYear = yearInputRef.current?.value;
        const selectedMonth = monthInputRef.current?.value;
        
        if (selectedYear && selectedMonth) {
            console.log(selectedYear, selectedMonth);
            props.onSearch(selectedYear, selectedMonth);
        }
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div>
                <div className={classes.control}>
                    <label htmlFor="year">Year</label>
                    <select id="year" ref={yearInputRef}>
                        <option value="1998">1998</option>
                        <option value="1975">1975</option>
                        <option value="2004">2004</option>
                        <option value="1999">1999</option>
                        <option value="1907">1907</option>
                        <option value="1909">1909</option>
                        <option value="1849">1849</option>
                        <option value="1886">1886</option>
                        <option value="1891">1891</option>
                    </select>
                </div>
                <div className={classes.control}>
                    <label htmlFor="month">Month</label>
                    <select id="month" ref={monthInputRef}>
                        <option value="1">January</option>
                        <option value="2">Febuary</option>
                        <option value="3">March</option>
                        <option value="4">April</option>
                        <option value="5">May</option>
                        <option value="6">June</option>
                        <option value="7">July</option>
                        <option value="8">August</option>
                        <option value="9">Septemper</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">Decemeber</option>
                    </select>
                </div>
                <Button >Search company</Button>
            </div>
        </form>
    )
}

export default CompaniesSearch;

