import { useState } from "react";
import { BaseUrl } from "../../config/apiConfig";
import Subject from "./Subject";
const SubjectHeading = ({ name, sem, code }) => {
  const [dropDown, setDropDown] = useState(false);
  const [data, setData] = useState(null);
  const getSubjectsAndData = async () => {
    try {
      let APIREQ = await fetch(`${BaseUrl}/subject?code=${code}&sem=${sem}`);
      let APIRES = await APIREQ.json();
      setData(APIRES);
      console.log(APIRES);
    } catch (err) {
      alert(err.message);
    }
  };
  const openDropDown = () => {
    if (dropDown) {
      setDropDown(false);
    } else {
      setDropDown(true);
      getSubjectsAndData();
    }
  };
  return (
    <>
      <div className="w-full my-4">
        <div className="flex rounded-full shadow-lg items-center justify-between  py-3 px-4 bg-white gap-2">
          <div className="left_info flex items-center gap-2">
            <span class="material-symbols-outlined auto_stories">
              auto_stories
            </span>

            <span className="text-xs font-semibold sm:text-base">{name}</span>
          </div>
          <button
            onClick={openDropDown}
            type="button"
            className="flex items-center justify-center"
          >
            <span class="material-symbols-outlined">
              {dropDown ? "expand_less" : "expand_more"}
            </span>
          </button>
        </div>
        <div
          className={` ${
            dropDown ? "" : "hidden"
          } py-3 bg-white my-2 shadow-lg rounded-lg`}
        >
          {data ? (
            data.length > 0 ? (
              data.map((item, index) => {
                return (
                  <Subject
                    key={index}
                    name={item.chapterName}
                    Id={item._id}
                    sem={sem}
                  />
                );
              })
            ) : (
              <span className="px-6 text-sm text-zinc-400">
                No Notes Till Now...
              </span>
            )
          ) : (
            <span className="px-6 text-sm text-zinc-400">
              Loading Please Wait...
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default SubjectHeading;
