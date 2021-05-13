import { useEffect } from "react";
import Hero from "../components/Hero";
import Pricing from "../components/Pricing";
import { heroData_chatting, heroData_login, heroData_security, heroData_transaction } from "../data/heroData";

const Services = () => {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    useEffect(() => {
        scrollToTop();
    }, []);

    return (
        <div className="services">
            <Hero data={heroData_chatting} />
            <Pricing />
        </div>
    );
}
 
export default Services;