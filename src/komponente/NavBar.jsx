import React from 'react'
import {Link} from 'react-router-dom'


function NavBar(){
    return(
        <div>
            <div className="topnav">
                <Link to="/">Home</Link>
                <Link to="/listaPesama">Lista pesama</Link>
                <Link to="/omiljene">Omiljene pesme</Link>
            </div>
        </div>
    );
}

export default NavBar;