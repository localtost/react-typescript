import React
    from "react";
import {Link} from 'react-router-dom'

const Navbar: React.FC = () => {
    return (
        <nav>
            <div
                className="nav-wrapper green darken-4 pd1">
                <Link to="/"
                   className="brand-logo">React+
                    TypeScript</Link>
                <ul className="right hide-on-med-and-down">
                    <li>
                        <Link to="/todo">Список
                            дел</Link>
                    </li>
                    <li>
                        <Link to="/about">Информация</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar
