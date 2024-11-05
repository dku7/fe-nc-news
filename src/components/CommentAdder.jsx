import { useContext, useEffect } from "react";
import { LoggedInUserContext } from "../contexts/LoggedInUser";

const CommentAdder = () => {
  const { loggedInUser } = useContext(LoggedInUserContext);

  return <p>Comment Adder</p>;
};

export default CommentAdder;
