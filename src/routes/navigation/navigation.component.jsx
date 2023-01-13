import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as HomeLogo } from "../../assets/game-controller.svg";
import { UserContext } from "../../contexts/user.context";

import { signOutAuthUser } from "../../utils/firebase/firebase.utils";

import "./navigation.styles.scss";

function Navigation() {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutAuthUser();
    setCurrentUser(null);
  };

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
          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Navigation;
