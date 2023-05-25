import CompanyListPage from "@/component/event/CompanyList"
import { useRouter } from "next/router"
import { getFilteredCompany } from "@/data/eventsData"

const SearchCompanyPage = () => {
    const router = useRouter()

    const sluts = router.query.slug
 
    if(sluts && sluts[0] && sluts[1]) {
        const filteredCompanies = getFilteredCompany(parseInt(sluts[0]), parseInt(sluts[1]))

        return (
            <div>
                <h1>Search Company Page</h1>
                <CompanyListPage events={filteredCompanies} />
            </div>
        )
    }
    else {
        return (
            <div>
                <h1>Search Company Page</h1>
            </div>
        )
    }
}

export default SearchCompanyPage