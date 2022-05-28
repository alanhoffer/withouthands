import './css/Navbar.css';


export default function Navbar(props){
    return (
        <nav className="navbar">
                <a className="navbar-brand" href="#">
                    <p>WH |</p>
                </a>
                <ul className="navbar-menu">
                    <li><a className={(props.status === "home") ? "active" : ""} href="#">Home</a></li>
                    <li><a className={(props.status === "about") ? "Products" : ""} href="#">Products</a></li>
                    <li><a className={(props.status === "contact") ? "active" : ""} href="#">Contact</a></li>
                </ul>
        </nav>
    )
}