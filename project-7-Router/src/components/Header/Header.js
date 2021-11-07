import { NavLink } from "react-router-dom";
import classes from './MainHeader.module.css'
const Header = () => {
    return (
        <header className={classes.header}>
            <nav>
            <ul >
                <li>
                    <NavLink to="/" >Home</NavLink>
                </li>
                <li>
                    <NavLink activeClassName={classes.active} to="/welcome" >Welcome</NavLink>
                </li>
                <li>
                    <NavLink activeClassName={classes.active} to="/products" >Products</NavLink>
                </li>
            </ul>
            </nav>
        </header>
    )
};

export default Header;