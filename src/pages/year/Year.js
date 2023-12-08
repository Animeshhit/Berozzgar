import Motivation from "../../components/Motivation/Motivation";
import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SubjectHeading from "../../components/Subject/SubjectHeading";
import { Syllabus } from "../../config/Syllubus";
import ShowCase from "../../components/ShowCase/ShowCase";
//redux

function Year({ progress }) {
  const { id } = useParams();
  const [currentDataOne, setCurrentDataOne] = useState(null);
  const [currentDataTwo, setCurrentDataTwo] = useState(null);

  useEffect(() => {
    setCurrentDataOne(Syllabus[id][1]);
    progress(50);
    setCurrentDataTwo(Syllabus[id][2]);
    progress(100);
  }, [id]);

  return (
    <>
      <div className="w-full h-full">
        <div className="container mx-auto px-4 mt-6">
          {/* breadcrumb  */}
          <div className="breadcrumb flex text-sm sm:text-base py-1 shadow-lg w-max bg-white text-zinc-500 px-1 rounded-md">
            <NavLink to="/home" className="flex items-center gap-1">
              <span class="material-symbols-outlined">home</span>
              <span>Home</span>
            </NavLink>

            <a href="#" className="flex items-center">
              <span class="material-symbols-outlined">chevron_right</span>
              <span>
                {id == 1
                  ? "First Year"
                  : id == 2
                  ? "Second Year"
                  : id == 3
                  ? "Third Year"
                  : "Fourth Year"}
              </span>
            </a>
            <a href="#" className="flex items-center">
              <span class="material-symbols-outlined">chevron_right</span>
              <span>
                {id == 1
                  ? "First sem"
                  : id == 2
                  ? "Third sem"
                  : id == 3
                  ? "Fifth sem"
                  : "Seventh sem"}
              </span>
            </a>
          </div>
          {/* subject heading  */}
          <div className="my-12 flex items-center gap-1">
            <span class="material-symbols-outlined Th_Pra_icon">
              export_notes
            </span>
            <span className="font-semibold">Theory :</span>
          </div>
          {/* subjects  */}
          {currentDataOne &&
            currentDataOne.Theory.map((item) => {
              return (
                <SubjectHeading
                  name={`${item.SubjectName} (${item.SubjectCode})`}
                  sem={id == 1 ? 1 : id == 2 ? 3 : id == 3 ? 5 : 7}
                  code={item.SubjectCode}
                  progress={progress}
                />
              );
            })}
          {/* subject heading  */}
          <div className="my-12 flex items-center gap-1">
            <span class="material-symbols-outlined Th_Pra_icon">science</span>
            <span className="font-semibold">Practical :</span>
          </div>
          {currentDataOne &&
            currentDataOne.Lab.map((item) => {
              return (
                <SubjectHeading
                  name={`${item.SubjectName} (${item.SubjectCode})`}
                  sem={id == 1 ? 1 : id == 2 ? 3 : id == 3 ? 5 : 7}
                  code={item.SubjectCode}
                  progress={progress}
                />
              );
            })}
          {/* other sem  */}
          <div className="breadcrumb  text-sm sm:text-base my-14 flex py-1 shadow-lg w-max bg-white text-zinc-500 px-1 rounded-md">
            <NavLink to="/home" className="flex items-center gap-1">
              <span class="material-symbols-outlined">home</span>
              <span>Home</span>
            </NavLink>

            <a href="#" className="flex items-center">
              <span class="material-symbols-outlined">chevron_right</span>
              <span>
                {id == 1
                  ? "First Year"
                  : id == 2
                  ? "Second Year"
                  : id == 3
                  ? "Third Year"
                  : "Fourth Year"}{" "}
              </span>
            </a>
            <a href="#" className="flex items-center">
              <span class="material-symbols-outlined">chevron_right</span>
              <span>
                {id == 1
                  ? "Second sem"
                  : id == 2
                  ? "Fourth sem"
                  : id == 3
                  ? "Sixth sem"
                  : "Eight sem"}
              </span>
            </a>
          </div>
          {/* for second sem  */}
          {/* {heading} */}
          <div className="my-12 flex items-center gap-1">
            <span class="material-symbols-outlined Th_Pra_icon">
              export_notes
            </span>
            <span className="font-semibold">Theory :</span>
          </div>

          {/* subjects  */}
          {currentDataTwo &&
            currentDataTwo.Theory.map((item) => {
              return (
                <SubjectHeading
                  name={`${item.SubjectName} (${item.SubjectCode})`}
                  sem={id == 1 ? 2 : id == 2 ? 4 : id == 3 ? 6 : 8}
                  code={item.SubjectCode}
                  progress={progress}
                />
              );
            })}
          {/* heading  */}
          <div className="my-12 flex items-center gap-1">
            <span class="material-symbols-outlined Th_Pra_icon">
              export_notes
            </span>
            <span className="font-semibold">Practical :</span>
          </div>
          {/* subjects  */}
          {currentDataTwo &&
            currentDataTwo.Lab.map((item) => {
              return (
                <SubjectHeading
                  name={`${item.SubjectName} (${item.SubjectCode})`}
                  sem={id == 1 ? 2 : id == 2 ? 4 : id == 3 ? 6 : 8}
                  code={item.SubjectCode}
                  progress={progress}
                />
              );
            })}
        </div>
      </div>

      <div className="mt-24">
        <ShowCase />
      </div>
    </>
  );
}

export default Year;
