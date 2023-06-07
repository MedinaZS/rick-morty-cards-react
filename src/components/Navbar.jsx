import { Link } from "react-router-dom"
import { APP_ROUTES } from "../utility"

const Navbar = () => {
    return (
        <nav className='bg-primary-subtle p-3'>
            <Link to={APP_ROUTES.HOME} className='fs-4 text-dark'>Prueba Técnica React Developer</Link>
        </nav>
    )
}

export default Navbar