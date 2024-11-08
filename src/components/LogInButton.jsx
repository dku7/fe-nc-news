import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoggedInUserContext } from "../contexts/LoggedInUser";

const LogInButton = () => {
  const { loggedInUser, setLoggedInUser } = useContext(LoggedInUserContext);
  const navigateTo = useNavigate();

  const signOut = () => {
    setLoggedInUser(null);
    localStorage.removeItem("loggedInUser");
  };
  const signIn = () => navigateTo("/login");

  const notLoggedIn = (
    <button className="login-button mr-4 mt-2" onClick={signIn}>
      Log in
    </button>
  );
  const loggedIn = (
    <div className="mr-4 w-36 text-right">
      <p className="mb-2 text-sm font-extralight text-gray-200">{`Hello, ${loggedInUser?.username}`}</p>
      <button className="login-button" onClick={signOut}>
        Sign Out
      </button>
    </div>
  );

  return loggedInUser?.username ? loggedIn : notLoggedIn;
};

export default LogInButton;
