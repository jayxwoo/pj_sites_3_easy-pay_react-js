import { Link } from "react-router-dom";
import { AiFillCreditCard } from "react-icons/ai";

const Logo = ({className, onClick}) => {
    return (
        <Link to="/" onClick={onClick} className={`logo ${className}`}><AiFillCreditCard className="logo-icon" />EasyPay</Link>
    );
}
 
export default Logo;