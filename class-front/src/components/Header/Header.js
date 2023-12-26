import "./Header.css"
import {Nav, NavDropdown, Navbar} from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import classes from "../../helpers/data"

const Header = () => {
    const nav = useNavigate()
    return <>
    <Navbar>
        <Navbar.Brand>Классы Гимназии</Navbar.Brand>
        <Nav>
            <Nav.Link onClick={() => nav("/")}>Главная</Nav.Link>
            <NavDropdown title="Классы">
                {classes.map(el => <NavDropdown.Item onClick={() => nav("/" + el.title)}>{el.title}</NavDropdown.Item>)}
            </NavDropdown>
        </Nav>
    </Navbar>
    </>
}

export default Header;