import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from "@mui/icons-material/Instagram";
import { ArrowDropDownSharp, ArrowDropDownTwoTone } from "@mui/icons-material";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonIcon from "@mui/icons-material/Person";
import { Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "./header.css";

 
export const Header = () => {
    return (
    <div className="App">
      <div className="header">
        <div className="hr">
          <PhoneEnabledIcon />
          <h6>(00) 000 111 222</h6>
        </div>
        <div className="hl">
          <TwitterIcon />
          <FacebookRoundedIcon />
          <GoogleIcon />
          <InstagramIcon />
          <h6>usd</h6>
          <ArrowDropDownSharp id="ex" />
        </div>
      </div>

      <div className="subheader">
        <div className="sht">
          <div className="logo">
            <img
              src="https://media.istockphoto.com/vectors/shopping-cart-line-icon-fast-buy-vector-logo-vector-id1184670036?k=20&m=1184670036&s=612x612&w=0&h=FpKQukhJ4X8WQkucHPbCqANJROKYB2v3k9ov3x-3vdI="
              alt=""
            />
            <span>
              <h3>GROCA</h3>
              <h6>GROCERY MART</h6>
            </span>
            <div className="opt">
              <h5>Home</h5>
              <span>
                <h5>Shop</h5>
                <ArrowDropDownSharp id="ex" />
              </span>
              <span>
                <h5>Best Seller</h5>
                <ArrowDropDownSharp id="ex" />
              </span>
              <span>
                <h5>Deal of The Day</h5>
                <ArrowDropDownSharp id="ex" />
              </span>
              <span>
                <h5>Pages</h5>
                <ArrowDropDownSharp id="ex" />
              </span>
              <h5>Contact Us</h5>
            </div>
              <div className="opticon">
                <FavoriteBorderOutlinedIcon />
                <ShoppingCartOutlinedIcon />
                <PersonIcon />
              </div>
          </div>
        </div>
        <div className="shd">
          <Button
            id="btn"
            startIcon={<MenuIcon />}
            endIcon={<ArrowDropDownTwoTone />}
          >
            {" "}
            All Departments
          </Button>
          <div className="shdsearch">
            <Button id="sh1" endIcon={<ArrowDropDownTwoTone id="sbtn"/>}>
              All Categories
            </Button>
            <input id="sh2" type="text" placeholder="search here" />
            <button id="btnn">Search</button>
          </div>
        </div>
      </div>
    </div>
    )
}
