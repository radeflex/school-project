import "./Header.css"
import {Nav, NavDropdown, Navbar} from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const Header = () => {
    const nav = useNavigate()
    return <>
    <Navbar>
        <Navbar.Brand>Классы Гимназии</Navbar.Brand>
        <Nav>
            <Nav.Link onClick={() => nav("/")}>Главная</Nav.Link>
            <NavDropdown title="Классы">
                {/* <NavDropdown.Item onClick={() => nav("/11Б")}>11Б</NavDropdown.Item> */}
            </NavDropdown>
        </Nav>
    </Navbar>
    </>
}

export default Header;