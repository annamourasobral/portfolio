import "./navbar.css";

const navbar = () => {
    return (
        <Nav>
            <NavLink to="/">
                <h1>Logo</h1>
            </NavLink>
            <Bars />
            <NavMenu>
                <NavLink to="/About" activeStyle>
                    About Me
                </NavLink>
                <NavLink to="/productList" activeStyle>
                    Portfolio
                </NavLink>
                <NavLink to="/Contact" activeStyle>
                    Contact
                </NavLink>
            </NavMenu>
            <NavBtn>
                <NavBtnLink></NavBtnLink>
            </NavBtn>
        </Nav>
    );
}