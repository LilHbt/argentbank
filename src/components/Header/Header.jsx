import React from "react";
import logo from "../../assets/img/argentBankLogo.png";
import { Link, useNavigate } from "react-router-dom";
import "./Header.scss";
import { useDispatch, useSelector } from "react-redux";
import { signOutUSer } from "../../redux/actions/userActions";

function Header() {
  const { token, user } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const routeChange = () => {
    let path = "/";
    navigate(path);
  };
  const signOut = () => {
    signOutUSer(dispatch);
    routeChange();
  };
  return (
    <header className="header">
      <Link to={"/"}>
        <img className="logo" src={logo} alt="logo Argent Bank" />
      </Link>
      {token ? (
        <div>
          <Link className="signin-link" to="/User">
            <i className="fa fa-user-circle signin-link--icon "></i>
            {user.userName}
          </Link>
          <button onClick={signOut}>Sign Out</button>
        </div>
      ) : (
        <Link className="signin-link" to="/SignIn">
          <i className="fa fa-user-circle signin-link--icon "></i>
          Sign In
        </Link>
      )}
    </header>
  );
}

export default Header;