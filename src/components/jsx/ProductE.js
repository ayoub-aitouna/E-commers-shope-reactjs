/* eslint-disable react/jsx-pascal-case */
import React from "react";
import style from "../css/productE.module.css";
import * as Icon_md from "react-icons/md";

function ProductE(props) {
  return (
    <div className={style.parent}>
      {" "}
      <div className={style.img}>
        <img src={props.img} alt="Product img" />
        <div className={style.hover_details}>
          <div className={style.add_cart}>
            <div className={style.cart}>
              <p> Add Cart </p>{" "}
            </div>{" "}
          </div>{" "}
          <div className={style.fav}>
            <div className={style.icon}>
              <Icon_md.MdFavoriteBorder className={style.c_icon} />{" "}
            </div>{" "}
          </div>{" "}
          <div className={style.state}>
            <div className={style.s}>
              <p> Sell </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <div className={style.data}>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>{" "}
        <div className={style.price}>
          <h4> 150 $ </h4> <h5> 150 $ </h5>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default ProductE;
