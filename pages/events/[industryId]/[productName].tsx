import { useRouter } from "next/router";
import { productData, Product } from "@/data/eventsData";

const CompanyPage = () => {
    const router = useRouter();
    const { productName } = router.query;
    
    const product = productData.find((product: Product) => product.name === String(productName));
    
    if (!product) {
        return <div>Product not found!</div>;
    }
    
    return (
        <h2>asdf</h2>
    );
};

export default CompanyPage;