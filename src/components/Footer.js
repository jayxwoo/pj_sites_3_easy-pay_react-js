import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button"
import Logo from "./Logo";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        alert(`A confirmation email has been sent to ${email}`);
        setEmail('');
    };

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-top">
                    <h2 className="footer-top__title">Join our newletter to receive our latest offers and news</h2>
                    <p className="footer-top__text"><em>You can unsubscribe at any time</em></p>
                    <form action="" className="footer-top__form" onSubmit={handleSubmit}>
                        <label htmlFor="email" className="footer-top__form-label a11y-hidden">Email</label>
                        <input type="text" className="footer-top__form-input" placeholder="email" id="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                        <Button btnStyle="btn-outline--white" btnSize="btn--medium">Subscribe</Button>
                    </form>
                </div>
                <div className="footer-middle">
                    <div className="footer-middle-container">
                        <div className="footer-middle__menu-container">
                            <h2 className="footer-middle__menu-title">About</h2>
                            <ul className="footer-middle__menu-group">
                                <li className="footer-middle__menu-item"><Link to="/services" className="footer-middle__menu-link">About</Link></li>
                                <li className="footer-middle__menu-item"><Link to="/services" className="footer-middle__menu-link">Introduction</Link></li>
                                <li className="footer-middle__menu-item"><Link to="/services" className="footer-middle__menu-link">History</Link></li>
                                <li className="footer-middle__menu-item"><Link to="/services" className="footer-middle__menu-link">Team</Link></li>
                            </ul>
                        </div>
                        <div className="footer-middle__menu-container">
                            <h2 className="footer-middle__menu-title">Contacts</h2>
                            <ul className="footer-middle__menu-group">
                                <li className="footer-middle__menu-item"><Link to="/products" className="footer-middle__menu-link">Contact</Link></li>
                                <li className="footer-middle__menu-item"><Link to="/products" className="footer-middle__menu-link">Support</Link></li>
                                <li className="footer-middle__menu-item"><Link to="/products" className="footer-middle__menu-link">Chat</Link></li>
                                <li className="footer-middle__menu-item"><Link to="/products" className="footer-middle__menu-link">Email</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-middle-container">
                        <div className="footer-middle__menu-container">
                            <h2 className="footer-middle__menu-title">Videos</h2>
                            <ul className="footer-middle__menu-group">
                                <li className="footer-middle__menu-item"><Link to="/signup" className="footer-middle__menu-link">Video</Link></li>
                                <li className="footer-middle__menu-item"><Link to="/signup" className="footer-middle__menu-link">Short Clips</Link></li>
                                <li className="footer-middle__menu-item"><Link to="/signup" className="footer-middle__menu-link">Advertisment</Link></li>
                                <li className="footer-middle__menu-item"><Link to="/signup" className="footer-middle__menu-link">Upload</Link></li>
                            </ul>
                        </div>
                        <div className="footer-middle__menu-container">
                            <h2 className="footer-middle__menu-title">Social Media</h2>
                            <ul className="footer-middle__menu-group">
                                <li className="footer-middle__menu-item"><Link to="/services" className="footer-middle__menu-link">Instagram</Link></li>
                                <li className="footer-middle__menu-item"><Link to="/services" className="footer-middle__menu-link">Facebook</Link></li>
                                <li className="footer-middle__menu-item"><Link to="/services" className="footer-middle__menu-link">Twitter</Link></li>
                                <li className="footer-middle__menu-item"><Link to="/services" className="footer-middle__menu-link">Youtube</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <Logo className="footer-bottom__logo" />
                    <small className="footer-bottom__copyrights">EasyPay © 2021</small>
                    <div className="footer-bottom__social-container">
                        <Link to="/signup" className="footer-bottom__social-link"><FaFacebook /></Link>
                        <Link to="/signup" className="footer-bottom__social-link"><FaInstagram /></Link>
                        <Link to="/signup" className="footer-bottom__social-link"><FaYoutube /></Link>
                        <Link to="/signup" className="footer-bottom__social-link"><FaTwitter /></Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;