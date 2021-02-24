import { Link } from "gatsby"
import React from "react"
import logo_header from "../../../static/images/logos/allto.semfundo.png"

const Header = () => {
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
export default Header
