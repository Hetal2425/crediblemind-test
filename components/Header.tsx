import React, { useState } from "react";
import { Container } from "@material-ui/core";
import styles from "./styles/HeaderStyle";
import useStyle from "../Hooks/useStyle";

import { useAuth } from "../context/auth";

const Header = ({ pageData }: any) => {
  let classes: any | null = useStyle(styles);
  const { user, logout } = useAuth();
  const [loginDisplay, setLoginDisplay] = useState(false);
  return (
    <header className={classes.headerMain}>
      <Container fixed>
        <div className={classes.logo}>
          <img
            src={"http:" + pageData?.items[0].fields.logo.fields.file.url}
            height="55px"
            width="167px"
            alt="logo"
          />
        </div>
        <div className="main__labelMain">
          <div className={classes.LabelMain}>
            {pageData?.items[0].fields.menuLabel}
          </div>

          <div className="main__header__bottom">
            <div
              onClick={() =>
                setLoginDisplay((setLoginDisplay: boolean) => !loginDisplay)
              }
              className="main__border__img"
            >
              <div className="main__header__bottom">
                <img
                  src={
                    user?.photoURL
                      ? user?.photoURL
                      : "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg"
                  }
                  alt="profile photo"
                />
                <div>{user?.displayName}</div>

                <div className="icon">
<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sort-down" class="svg-inline--fa fa-sort-down fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"></path></svg></div>
              </div>
              {loginDisplay ? <button onClick={logout}>Logout</button> : null}
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
