import { Container } from "reactstrap"
import NavbarCustom from "./NavbarCustom"

const Layout = ({children}) => {
    return (
        <Container>
            <NavbarCustom />
            { children }
        </Container>
    )
}

export default Layout