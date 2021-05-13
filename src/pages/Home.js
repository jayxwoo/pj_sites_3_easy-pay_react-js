import { useEffect } from "react";
import Hero from "../components/Hero";
import Pricing from "../components/Pricing";
import { heroData_chatting, heroData_login, heroData_security, heroData_transaction } from "../data/heroData";

const Home = () => {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    useEffect(() => {
        scrollToTop();
    }, []);

    return (
        <div className="home">
            <Hero data={heroData_transaction} />
            <Hero data={heroData_chatting} />
            <Hero data={heroData_login} />
            <Pricing />
            <Hero data={heroData_security} />
        </div>
    );
}
 
export default Home;