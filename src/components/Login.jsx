import Header from "./Header";
import { LoggedInUserContext } from "../contexts/LoggedInUser";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigateTo = useNavigate();
  const { loggedInUser, setLoggedInUser } = useContext(LoggedInUserContext);
  const [password, setPassword] = useState("password");

  const defaultUser = {
    username: "cooljmessy",
    name: "Peter Messy",
    avatar_url:
      "https://vignette.wikia.nocookie.net/mrmen/images/1/1a/MR_MESSY_4A.jpg/revision/latest/scale-to-width-down/250?cb=20170730171002",
  };

  const handleLogin = (event) => {
    event.preventDefault();
    setLoggedInUser(defaultUser);
    localStorage.setItem("loggedInUser", JSON.stringify(defaultUser));
    navigateTo(-1);
  };

  return (
    <>
      <Header />
      <div className="h-screen flex justify-center mt-40">
        <div className="w-2/3 md:w-1/3">
          <form onSubmit={handleLogin}>
            <fieldset className="border rounded pt-4 px-4 pb-8">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                className="block border rounded w-full mb-4 p-1"
                name="username"
                id="username"
                value={defaultUser.username}
                readOnly={true}
              />
              <label htmlFor="password">Password:</label>
              <input
                className="block border rounded w-full p-1"
                type="password"
                name="password"
                id="password"
                value={password}
                readOnly={true}
              />
              <button
                title="Login"
                className="border rounded px-4 bg-sky-800 text-white mb-2 w-full py-2 mt-8"
                type="submit">
                Login
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
