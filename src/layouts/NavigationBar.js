import './NavigationBar.css';
import RoversLogo from '../assets/images/rovers-logo.jpg';

const NavigationBar = () => {
    return ( 
        <header className="navigation-bar-wrapper">
            <div className="navigation-logo-container flex justifyContent-c alignItems-c">
            <a href="/">
                <img className="navigation-logo" src={RoversLogo} alt="Birmingham Rovers basketball club's logo" />
            </a>
            </div>
            <div className="navigation-links flex alignItems-c">
                <a href="/">Home</a>
                <a href="/">Our Club</a>
                <a href="/">Contact</a>
                <a href="/">Player Portal</a>
            </div>
        </header>
     );
}
 
export default NavigationBar;