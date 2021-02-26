import { Link } from "gatsby"
import React from "react"

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
        src: "/images/logos/allto.icon.semfundo.png",
      })
    }
    if (document.documentElement.scrollTop < 700) {
      this.setState({
        className: "logo",
        src: "/images/logos/allto.semfundo.png",
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
