import { Link } from "gatsby"
import React from "react"
import logo_header from "../../../static/images/logos/allto.semfundo.png"

class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      className: "logo",
    }
  }
  handleScroll() {
    if (document.documentElement.scrollTop > 700) {
      this.setState({
        className: "logo_change",
        src: "/static/allto.icon.semfundo-33d28a632ea797eb194a5809218a07a6.png",
      })
    }
    if (document.documentElement.scrollTop < 700) {
      this.setState({
        className: "logo",
        src: "/static/allto.semfundo-f68c1142a0e319a28a191f8e0d6a7412.png",
      })
    }
  }

  componentDidMount() {
    window.onscroll = () => this.handleScroll()
  }

  render() {
    return (
      <>
        <header>
          <div className={"container"}>
            <div className={"top-menu"}>
              <div className={this.state.className}>
                <Link to="/" title={"Home"}>
                  <img id={"logo_img"} alt={"Logo"} src={this.state.src} />
                </Link>
              </div>
            </div>
          </div>
        </header>
      </>
    )
  }
}
export default Header
