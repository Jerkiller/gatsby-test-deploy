import {Link} from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../../static/images/logo.svg"
    
const Header = ({siteTitle}) => (
    <header>
        <div className={"container"}>
            <div className={"top-menu"}>
                <div className={"logo"}>
                    <Link to="/" title={"HiStaff"}>
                        <img alt={"Logo"} src={logo}/>
                    </Link>
                </div>

                <Link to="/" title={"Home"}>
                        HOME
                    </Link>
                <Link to="/test" title={"test"}>
                        TEST
                    </Link>
                <Link to="/test2" title={"test2"}>
                        TEST 2
                    </Link>
            </div>
        </div>
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
