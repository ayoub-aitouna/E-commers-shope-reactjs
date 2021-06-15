import React from "react";
import style from "../css/DashboardElement.module.css";

function DashboardElement(props) {
  return (
    <div className={style.parent}>
      <div className={style.Headline}>
        <h4>Lorem, ipsum dolor.</h4>
      </div>
      <div className={style.text}>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate,
          earum?
        </p>
      </div>
      <div className={style.img}>
        <img src={props.img} alt="" />
      </div>
      <div className={style.L_btn}>
        <input type="button" value="View more" />
      </div>
    </div>
  );
}

export default DashboardElement;
