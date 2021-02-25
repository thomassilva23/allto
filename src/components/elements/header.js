import { Link } from "gatsby"
import React from "react"
import logo_header from "../../../static/images/logos/allto.semfundo.png"
import logo_sml from "../../../static/images/logos/allto.icon.semfundo.png"
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
          $(window).on('scroll', function(){
            if($(window).scrollTop() > 700){
              $('.logo').hide();
              $('.logo').removeClass('logo');
                $('.logo').addClass('logo_change').fadeIn("slow");
                $('#logo_img').attr('src', '/static/allto.icon.semfundo-33d28a632ea797eb194a5809218a07a6.png');
            }else{
                $('.logo').removeClass('logo_change');
                $('.logo').addClass('logo').fadeIn("slow");
                $('#logo_img').attr('src', '/static/allto.semfundo-f68c1142a0e319a28a191f8e0d6a7412.png');
            }
        }
       )
        }`}</script>
      </Helmet>
      <header>
        <div className={"container"}>
          <div className={"top-menu"}>
            <div className={"logo"}>
              {/*<div
                data-sal="slide-up"
                data-sal-delay="300"
                data-sal-easing="ease"
              >*/}
              <Link to="/" title={"Home"}>
                <img id={"logo_img"} alt={"Logo"} src={logo_header} />
              </Link>
            </div>
          </div>
          {/*</div>*/}
        </div>
      </header>
    </>
  )
}
export default Header
