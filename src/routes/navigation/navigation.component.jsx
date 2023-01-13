import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as HomeLogo } from "../../assets/game-controller.svg";
import { UserContext } from "../../contexts/user.context";

import "./navigation.styles.scss";

function Navigation() {
  const { currentUser } = useContext(UserContext);
  console.log(currentUser);

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <HomeLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/auth">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Navigation;
