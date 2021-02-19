import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo_header from "../../static/images/logos/allto.semfundo.preto.jpg"

const Header = ({ siteTitle }) => {
  return (
    <>
      <header>
        <div className={"container"}>
          <div className={"top-menu"}>
            <div className={"logo"}>
              <Link to="/" title={"Home"}>
                <img alt={"Logo"} src={logo_header} />
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
