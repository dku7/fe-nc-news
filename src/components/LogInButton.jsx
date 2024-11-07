import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoggedInUserContext } from "../contexts/LoggedInUser";

const LogInButton = () => {
  const { loggedInUser, setLoggedInUser } = useContext(LoggedInUserContext);
  const redirect = useNavigate();

  const signOut = () => setLoggedInUser(null);
  const signIn = () => redirect("/login");

  const notLoggedIn = (
    <button
      className="w-20 text-sm font-extralight border-gray-200 bg-gray-200 rounded  mt-2 mr-4 text-sky-700"
      onClick={signIn}>
      Log in
    </button>
  );
  const loggedIn = (
    <div className="w-36 text-right mr-4">
      <p className="text-gray-200 text-sm font-extralight">{`Hello, ${loggedInUser?.name}`}</p>
      <button
        className="w-20 text-sm font-extralight border-gray-200 bg-gray-200 rounded text-sky-700"
        onClick={signOut}>
        Sign Out
      </button>
    </div>
  );

  return loggedInUser?.username ? loggedIn : notLoggedIn;
};

export default LogInButton;
