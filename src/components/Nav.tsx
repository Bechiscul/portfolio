import React, {useState} from 'react'
import {Link} from "react-router-dom"

const Nav = () => {
    let [useSidebar, setUseSidebar] = useState(false);

    return (
        <nav className="h-10 bg-blue-500 flex items-center justify-end px-5">
            <ul className="space-x-4">
                <Link to="/about" title="About">About</Link>
                <Link to="/projects" title="Projects">Projects</Link>
                <Link to="/skills" title="Skills">Skills</Link>
                <a href="https://github.com/bechiscul/"></a>
                <a href="https://github.com/bechiscul/"></a>
                <a href="https://github.com/bechiscul/"></a>
            </ul>
        </nav>
    )
}

export default Nav
