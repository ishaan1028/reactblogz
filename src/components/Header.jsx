import { NavLink } from "react-router-dom";
import { Nav, Container, Navbar } from "react-bootstrap";
import { FaReact } from "react-icons/fa";

function Header() {

    return <header>
        <Navbar bg="primary" variant="dark">
            <Container>
                <NavLink style={{ color: "white", textDecoration: "none", fontSize: "1.5rem", fontWeight: "700", display: "flex", alignItems: "center", gap: "0.3rem" }} to="/"><span style={{
                    position: "relative",
                    bottom: "4px",
                    fontSize: "2rem"
                }}><FaReact /></span>  REACT BLOGZ</NavLink>
                <Nav className="ml-auto">
                    <NavLink exact activeStyle={{ color: "gold" }} style={{ color: "white", textTransform: "uppercase", textDecoration: "none", padding: "1rem", fontSize: "1rem" }} to="/">Home</NavLink>
                    <NavLink activeStyle={{ color: "gold" }} style={{ color: "white", textTransform: "uppercase", textDecoration: "none", padding: "1rem", fontSize: "1rem" }} to="/posts">Posts</NavLink>
                    <NavLink activeStyle={{ color: "gold" }} style={{ color: "white", textTransform: "uppercase", textDecoration: "none", padding: "1rem", fontSize: "1rem" }} to="/about">About</NavLink>
                </Nav>
            </Container>
        </Navbar>
    </header>

}

export default Header;