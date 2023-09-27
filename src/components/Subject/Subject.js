import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Subject = (props) => {
  const isLoggedIn = useSelector((state) => state.auth.auth);
  return (
    <>
      <div className="flex items-center justify-between py-2 my-2 px-6 hover:bg-zinc-300 cursor-pointer bg-white gap-2">
        <div className="left_info flex items-center gap-2">
          <span class="material-symbols-outlined auto_stories">
            auto_stories
          </span>

          <span className="text-xs sm:text-base">{props.name}</span>
        </div>
        <NavLink
          title="click To View"
          to={`/view/${props.Id}/${props.sem}`}
          className="flex text-xs md:text-base items-center bg-zinc-800 py-1 sm:py-1.5 px-4 sm:px-6 rounded-full hover:bg-zinc-600 transitions text-white"
        >
          <span class="material-symbols-outlined View">visibility</span>
        </NavLink>
      </div>
    </>
  );
};

export default Subject;
