import {pricingData} from "../data/pricingData";
import PricingCard from "./PricingCard";

const Pricing = () => {
    return (
        <div className="pricing">
            <div className="pricing-container">
                <h1 className="pricing__title">Pricing</h1>
                <div className="pricing-cards-container">
                    {pricingData.map((data) => {
                        return (<PricingCard data={data} key={data.id} />)
                    })}
                </div>
            </div>
        </div>
    );
}
 
export default Pricing;