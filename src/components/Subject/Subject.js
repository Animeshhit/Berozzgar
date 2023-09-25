const Subject = (props) => {
  return (
    <>
      <div className="flex items-center justify-between my-4 shadow-lg py-2 px-4 bg-white rounded-full gap-2">
        <div className="left_info flex items-center gap-2">
          <span class="material-symbols-outlined auto_stories">
            auto_stories
          </span>

          <span className="text-xs sm:text-base">{props.name}</span>
        </div>
        <button
          type="button"
          className="flex text-xs md:text-base items-center bg-zinc-800 py-1 sm:py-1.5 px-4 sm:px-6 rounded-full hover:bg-zinc-600 transitions text-white"
        >
          <span class="material-symbols-outlined View">visibility</span>
        </button>
      </div>
    </>
  );
};

export default Subject;
