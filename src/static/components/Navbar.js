import './css/Navbar.css';


export default function Navbar(){
    return (
        <nav className="navbar">
                <a className="navbar-brand" href="#">
                    <p>WH |</p>
                </a>
                <ul className="navbar-menu">
                    <li><a className="navbar-item" href="#">Home</a></li>
                    <li><a className="navbar-item" href="#">About</a></li>
                    <li><a className="navbar-item" href="#">Contact</a></li>
                </ul>
        </nav>
    )
}