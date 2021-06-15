import { useState } from "react";
import style from "../css/Auth.module.css";

function Auth(props) {
  const [islog, setIslog] = useState(true);
  const [singup, setsingup] = useState({
    username: "",
    email: "",
    pass: "",
    confirm_pass: "",
  });
  const [login, setlogin] = useState({
    username: "",
    email: "",
    pass: "",
  });
  return (
    <div
      className={
        props.Show ? `${style.parent}` : `${style.parent} ${style.active}`
      }
    >
      <div className={style.title}>Seeler</div>

      {islog ? (
        <div className={style.login}>
          <form action="" method="post">
            <div className={style.username}>
              <input
                onChange={(e) =>
                  setlogin({ ...login, username: e.target.value })
                }
                value={login.username}
                type="text"
                placeholder="Username/Email"
              />
            </div>
            <div className={style.pass}>
              <input
                onChange={(e) => setlogin({ ...login, pass: e.target.value })}
                value={login.pass}
                type="text"
                placeholder="password"
              />
            </div>
            <div className={style.valide}>
              <input type="submit" value="Sing in" />
            </div>
          </form>
        </div>
      ) : (
        <div className={style.singup}>
          <form action="" method="post">
            <div className={style.username}>
              <input
                onChange={(e) =>
                  setsingup({ ...singup, username: e.target.value })
                }
                value={singup.username}
                type="text"
                placeholder="Username"
              />
            </div>
            <div className={style.email}>
              <input
                onChange={(e) =>
                  setsingup({ ...singup, email: e.target.value })
                }
                value={singup.email}
                type="email"
                placeholder="Email"
              />
            </div>
            <div className={style.pass}>
              <input
                onChange={(e) => setsingup({ ...singup, pass: e.target.value })}
                value={singup.pass}
                type="password"
                placeholder="Password"
              />
            </div>

            <div className={style.con_pass}>
              <input
                onChange={(e) =>
                  setsingup({ ...singup, confirm_pass: e.target.value })
                }
                value={singup.confirm_pass}
                type="password"
                placeholder="Confirm password"
              />
            </div>
            <div className={style.valide}>
              <input type="submit" value="Regester" />
            </div>
          </form>
        </div>
      )}
      <div className={style.change}>
        {islog ? (
          <div>
            <span>if you still dont have an account</span>{" "}
            <h5 onClick={() => setIslog(false)}>Singup</h5>
          </div>
        ) : (
          <div>
            <span>if you Already have an account</span>{" "}
            <h5 onClick={() => setIslog(true)}>log in</h5>
          </div>
        )}
      </div>
    </div>
  );
}

export default Auth;
