const Button = ({btnStyle, btnSize, type, onClick, children, className}) => {
    const STYLES = ['btn-primary--white', 'btn-primary--darkblue', 'btn-primary--blue', 'btn-primary--red', 'btn-primary--yellow', 'btn-outline--white', 'btn-outline--darkblue', 'btn-outline--blue', 'btn-outline--red', 'btn-outline--yellow'];
    const SIZES = ['btn--medium', 'btn--large', 'btn--mobile'];

    const checkBtnStyle = STYLES.includes(btnStyle) ? btnStyle : STYLES[0];
    const checkBtnSize = SIZES.includes(btnSize) ? btnSize : SIZES[0];

    return (
        <button className={`btn ${className} ${checkBtnStyle} ${checkBtnSize}`} onClick={onClick} type={type}>{children}</button>
    );
}
 
export default Button;