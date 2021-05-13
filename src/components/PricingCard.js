import { useContext } from "react";
import { Link } from "react-router-dom";
import { IsMobileContext } from "../contexts/IsMobileContext";
import Button from "./Button";

const PricingCard = ({data}) => {
    const {isMobile} = useContext(IsMobileContext);

    return (
        <div className="pricing-card" style={data.highlight ? {background: "var(--yellow)"} : {background: "var(--darkblue)"}}>
            <div className="pricing-card__info-container">
                <div className="pricing-card__info-icon-container" style={data.highlight ? {color: "var(--red)"} : {color: "white"}}>{data.icon}</div>
                <h3 className="pricing-card__info-plan" style={data.highlight ? {color: "var(--darkblue)"} : {color: "var(--yellow)"}}>{data.plan}</h3>
                <p className="pricing-card__info-price">{data.price}</p>
                <p className="pricing-card__info-recurrence">{data.recurrence}</p>
            </div>
            <div className="pricing-card__desc-container">
                <p className="pricing-card__desc pricing-card__desc-transaction">{data.transaction}</p>
                <p className="pricing-card__desc pricing-card__desc-cashback">{data.cashBack}</p>
                <p className="pricing-card__desc pricing-card__desc-limit">{data.limit}</p>
            </div>
            <Link to="/signup" className="pricing-card__link"><Button className="pricing-card__btn" btnSize={isMobile ? data.btnSize[1] : data.btnSize[0]} btnStyle={data.highlight ? data.btnStyle[1] : data.btnStyle[0]}>Choose a Plan</Button></Link>
        </div>
    );
}

export default PricingCard;