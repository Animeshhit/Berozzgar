import { useState } from "react";
import { BaseUrl } from "../../config/apiConfig";
import Subject from "./Subject";

const SubjectHeading = ({ name, sem, code, progress }) => {
  const [dropDown, setDropDown] = useState(false);
  const [data, setData] = useState(null);
  const getSubjectsAndData = async () => {
    progress(50);
    try {
      let APIREQ = await fetch(`${BaseUrl}/subject?code=${code}&sem=${sem}`);
      let APIRES = await APIREQ.json();
      setData(APIRES);
      console.log(APIRES);
    } catch (err) {
      alert(err.message);
    }
    progress(100);
  };
  const openDropDown = () => {
    if (dropDown) {
      setDropDown(false);
      setData(null);
    } else {
      setDropDown(true);
      getSubjectsAndData();
    }
  };
  return (
    <>
      <div className="w-full my-4">
        <div
          onClick={openDropDown}
          className="flex rounded-full bg-2 cursor-pointer shadow-lg items-center justify-between  py-3 px-4 bg-white gap-2"
        >
          <div className="left_info flex items-center gap-2">
            <span class="material-symbols-outlined auto_stories">
              auto_stories
            </span>

            <span className="text-xs font-semibold sm:text-base capitalize">
              {name}
            </span>
          </div>
          <button
            onClick={openDropDown}
            type="button"
            className="flex items-center cursor-pointer justify-center"
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
                Notes Will Be Available Soon 🚀🚀
              </span>
            )
          ) : (
            <span className="px-6 text-sm text-zinc-400">
              Sabar karo Thora Sa 😉 Garib server hai Humlogo ka..
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default SubjectHeading;
