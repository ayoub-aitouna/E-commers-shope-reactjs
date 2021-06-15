/* eslint-disable react/jsx-pascal-case */
import { useState } from "react";
import { Link } from "react-router-dom";
import style from "../css/NavBar.module.css";
import * as Icon_Ri from "react-icons/ri";
import * as Icon_Ai from "react-icons/ai";
import * as Icon_Ti from "react-icons/ti";
import * as Icon_fa from "react-icons/fa";
import * as Icon_BI from "react-icons/bi";
import * as Icon_IO from "react-icons/io";
import { Auth } from "../../components";

function Navbar() {
  const [menuState, setmenuState] = useState(false);
  const [loginPanel, setloginPanel] = useState(true);

  return (
    <>
      <Auth Show={loginPanel} />
      <div className={style.menu_button}>
        {!menuState ? (
          <Icon_BI.BiMenuAltRight
            onClick={() => setmenuState(true)}
            className={`${style.menu_button_icon} ${style.open}`}
          />
        ) : (
          <Icon_IO.IoMdClose
            onClick={() => setmenuState(false)}
            className={`${style.menu_button_icon} ${style.close}`}
          />
        )}
      </div>
      <div
        className={
          !menuState ? `${style.parent}` : `${style.parent} ${style.avtive} `
        }
      >
        <div className={style.logo}>
          <Link className={`${style.menu_link} link`} to="/">
            <h3>Seeler</h3>
          </Link>
        </div>
        <div className={style.menu}>
          <ul>
            <li>
              <Link className={`${style.menu_link} link`} to="/">
                Dashboard
              </Link>
            </li>
            <li>
              {" "}
              <Link className={`${style.menu_link} link`} to="/Men">
                Men
              </Link>
            </li>
            <li>
              {" "}
              <Link className={`${style.menu_link} link`} to="/Women">
                Women
              </Link>
            </li>
            <li>
              {" "}
              <Link className={`${style.menu_link} link`} to="/OnSell">
                On Sell
              </Link>
            </li>
            <li>
              {" "}
              <Link className={`${style.menu_link} link`} to="/Children">
                Children
              </Link>
            </li>
          </ul>
        </div>
        <div className={style.auth}>
          <div
            className={style.login}
            onClick={() => setloginPanel(!loginPanel)}
          >
            <Icon_Ri.RiMapPinUserLine className={style.icon} />
            <p>login</p>
          </div>
          <Link className={`${style.singup} link`} to="/ShopCart">
            {" "}
            <Icon_Ti.TiShoppingCart className={style.icon} />
            <p>Cart</p>
          </Link>
          <div className={style.social}>
            <div className={style.email}>
              <h5>Contact US</h5>
              <p>Email345@Email.com</p>
            </div>
            <Icon_fa.FaFacebookSquare className={style.fb} />
            <Icon_Ai.AiOutlineInstagram className={style.insta} />
            <Icon_fa.FaEbay className={style.ebay} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
