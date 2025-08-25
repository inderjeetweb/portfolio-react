import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from "react-router-dom";
export const Header = () => {
    const location = useLocation();
    const { pathname } = location;
    console.log(pathname)
    let dynaHeaderClass = "";
    if(pathname != "/"){
        dynaHeaderClass = "section-containerCustomTiny"
    }
    
    return (
        <>

            <div className='headerStrip container-fluid'>
                {/* <ul>
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>    
                        <Link to="/blog">
                            Blog
                        </Link>
                    </li>
                </ul> */}
            </div>
            <header className={`white-text-containerCustom section-containerCustom ${dynaHeaderClass} `}>
                <div className="text-center">
                    <h1>I am Inderjeet</h1>
                    <p>Full Stack Developer</p>
                    <p>
                        <a className="fa-icon fa-icon-2x" target="_blank" href="https://www.facebook.com/inderjeetweb" title="Facebook">
                            <i className="fa fa-facebook"></i>
                        </a>
                        <a className="fa-icon fa-icon-2x" target="_blank" href="https://x.com/indjeet19" title="Twitter">
                            <i className="fa fa-twitter"></i>
                        </a>
                        <a className="fa-icon fa-icon-2x" target="_blank" href="https://www.linkedin.com/in/inderjeetweb" title="Linikedin">
                            <i className="fa fa-linkedin"></i>
                        </a>
                        <a className="fa-icon fa-icon-2x" target="_blank" href="https://github.com/inderjeetweb" title="GitHub">
                            <i className="fa fa-github"></i>
                        </a>
                        {/* <a className="fa-icon fa-icon-2x" href="https://drive.google.com/uc?id=1VQeoBlQwzwpgWGvNLU-CbiKQcBv6zN3_&amp;export=download" title="Download CV">
                            <i className="fa fa-download"></i>
                        </a> */}
                    </p>
                </div>
            </header>
        </>
    )
}
