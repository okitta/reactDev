import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>
                Okitta Ongaye
            </h1>
            <div>
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
                <Link to="/notFound">Contact Us</Link>
                <Link to="/notFound">About Us</Link>
                <Link to="/notFound">Feedback </Link>
            </div>
        </nav>
    );
}
export default Navbar;