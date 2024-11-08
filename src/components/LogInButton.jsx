import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoggedInUserContext } from "../contexts/LoggedInUser";
import { SmallScreenContext } from "../contexts/SmallScreen";

const LogInButton = () => {
  const { loggedInUser, setLoggedInUser } = useContext(LoggedInUserContext);
  const { isSmallScreen } = useContext(SmallScreenContext);

  const navigateTo = useNavigate();

  const signOut = () => {
    setLoggedInUser(null);
    localStorage.removeItem("loggedInUser");
  };
  const signIn = () => navigateTo("/login");

  const notLoggedIn = (
    <button className="login-button mr-4 mt-2" onClick={signIn}>
      {isSmallScreen ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
          />
        </svg>
      ) : (
        "Log in"
      )}
    </button>
  );
  const loggedIn = (
    <div className="right mr-4 text-right">
      <span className="mb-2 text-xs font-extralight text-gray-200 md:text-sm">
        {loggedInUser?.username}
      </span>
      <button className="login-button mr-4 mt-2" onClick={signOut}>
        {isSmallScreen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
            />
          </svg>
        ) : (
          "Sign Out"
        )}
      </button>
    </div>
  );

  return loggedInUser?.username ? loggedIn : notLoggedIn;
};

export default LogInButton;
