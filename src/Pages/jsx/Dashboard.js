import style from "../css/Dashboard.module.css";
import { ProductE, DashboardElement } from "../../components";
import { TestImg, top1, top2, top3 } from "../../Assets";

function Dashboard() {
  return (
    <>
      <div className={style.parent}>
        <div className={style.main}>
          <div className={style.h}>
            <h3> my feet brand new shoes </h3>{" "}
          </div>{" "}
          <div className={style.t}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Arcu felis
              convallis fringilla lacus nulla bibendum duis nulla a.Sociis nec,
              quis vitae imperdiet.Iaculis massa nulla elit id elementum sapien
              sem scelerisque suscipit.Nisi, tincidunt ac eget nisi, massa odio
              morbi.{" "}
            </p>{" "}
          </div>{" "}
          <div className={style.btn}>
            <input type="button" value="View more" />
          </div>{" "}
          <div className={style.v}>
            <ul>
              <li className={style.Vdont}> </li>{" "}
              <li className={style.Vdont}> </li>{" "}
              <li className={style.Vdont}> </li>{" "}
            </ul>{" "}
          </div>{" "}
          <div className={style.img}>
            <img src={TestImg} alt="" />
          </div>{" "}
          <div className={style.dimg}>
            <ul>
              <li>
                <img src={top1} alt="" />
              </li>{" "}
              <li>
                <img src={top2} alt="" />
              </li>{" "}
              <li>
                <img src={top3} alt="" />
              </li>{" "}
            </ul>{" "}
          </div>{" "}
        </div>{" "}
        <div className={style.left}>
          <DashboardElement img={top1} />{" "}
        </div>{" "}
        <div className={style.right}>
          <DashboardElement img={top2} />{" "}
        </div>{" "}
        <div className={style.right_btm}>
          <DashboardElement img={top3} />{" "}
        </div>{" "}
      </div>{" "}
      <div className={style.allProducts}>
        <ul className={style.all_P_ul}>
          {" "}
          {Array(8)
            .fill()
            .map((item, index) => (
              <li key={index}>
                <ProductE img={top2} />{" "}
              </li>
            ))}{" "}
        </ul>{" "}
        <div className={style.shop}>
          <div className={style.line}> </div>{" "}
          <div className={style.buton}>
            <input type="button" value="SHOP NOW" />
          </div>{" "}
          <div className={style.line}> </div>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
}

export default Dashboard;
