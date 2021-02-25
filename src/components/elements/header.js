import { Link } from "gatsby"
import React from "react"
import logo_header from "../../../static/images/logos/allto.semfundo.png"
import { Helmet } from "react-helmet"

const Header = () => {
  return (
    <>
      <Helmet>
        {/*jquery*/}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js" />
        {/*função logo*/}
        <script type="text/javascript">{`
        {
  
          var logo = $(".logo"); 
          
          $(window).scroll(function() {
            var scroll = $(window).scrollTop();
      
            if (scroll >= 700) {
              if(logo.hasClass("logo")) {
                logo.removeClass("logo").addClass("logo_change").fadeIn( "slow");
                $('#logo_img').attr('src', '/static/allto.icon.semfundo-33d28a632ea797eb194a5809218a07a6.png');
              }
            } 
            else {
              if(logo.hasClass("logo_change")) {
                logo.removeClass("logo_change").addClass("logo").fadeIn( "slow");
                $('#logo_img').attr('src', '/static/allto.semfundo-f68c1142a0e319a28a191f8e0d6a7412.png');
              }
            }      
          });
        }`}</script>
      </Helmet>
      <header>
        <div className={"container"}>
          <div className={"top-menu"}>
            <div className={"logo"}>
              <Link to="/" title={"Home"}>
                <img id={"logo_img"} alt={"Logo"} src={logo_header} />
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
export default Header
