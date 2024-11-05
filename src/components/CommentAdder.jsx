import { useContext, useEffect } from "react";
import { LoggedInUserContext } from "../contexts/LoggedInUser";

const CommentAdder = () => {
  const { loggedInUser } = useContext(LoggedInUserContext);

  return (
    <div>
      <form>
        <label htmlFor="comment-input">Add comment:</label>
        <textarea
          className="block border rounded w-full resize-none mt-2 mb-4"
          name="comment-input"
          id="comment-input"
        />
        <button
          className="border rounded px-4 bg-gray-800 text-white mb-2"
          type="submit">
          Add
        </button>
      </form>
      <p>feedback here</p>
    </div>
  );
};

export default CommentAdder;
