import Subject from "../../components/Subject/Subject";
import Motivation from "../../components/Motivation/Motivation";

function View() {
  return (
    <>
      <div className="w-full h-full">
        <div className="container mx-auto px-4 mt-6">
          <div className="breadcrumb flex text-sm sm:text-base py-1 shadow-lg w-max bg-white text-zinc-500 px-1 rounded-md">
            <a href="#" className="flex items-center gap-1">
              <span class="material-symbols-outlined">home</span>
              <span>Home</span>
            </a>

            <a href="#" className="flex items-center">
              <span class="material-symbols-outlined">chevron_right</span>
              <span> First Year </span>
            </a>
            <a href="#" className="flex items-center">
              <span class="material-symbols-outlined">chevron_right</span>
              <span>First Sem</span>
            </a>
          </div>
          {/* subject heading  */}
          <div className="my-12 flex items-center gap-1">
            <span class="material-symbols-outlined Th_Pra_icon">
              export_notes
            </span>
            <span>Theory :</span>
          </div>
          {/* subjects  */}
          <Subject name="Mathematics-I (BS-M 101)" />
          <Subject name="Physics-I (BS-PH 101)" />
          <Subject name="Basic Electrical & Electronics Engg. (ES-EE 101)" />
          {/* subject heading  */}
          <div className="my-12 flex items-center gap-1">
            <span class="material-symbols-outlined Th_Pra_icon">science</span>
            <span>Practical :</span>
          </div>

          {/* subjects  */}
          <Subject name="Physics-I Lab (BS-PH 191)" />
          <Subject name="Workshop Practice (ES-ME 191 )" />
          <Subject name="Basic Electrical & Electronics Engg. Lab (ES-EE 191)" />
          {/* other sem  */}
          <div className="breadcrumb  text-sm sm:text-base my-14 flex py-1 shadow-lg w-max bg-white text-zinc-500 px-1 rounded-md">
            <a href="#" className="flex items-center gap-1">
              <span class="material-symbols-outlined">home</span>
              <span>Home</span>
            </a>

            <a href="#" className="flex items-center">
              <span class="material-symbols-outlined">chevron_right</span>
              <span> First Year </span>
            </a>
            <a href="#" className="flex items-center">
              <span class="material-symbols-outlined">chevron_right</span>
              <span>Second Sem</span>
            </a>
          </div>
          {/* for second sem  */}

          <Subject name="Mathematics-I (BS-M 101)" />
          <Subject name="Physics-I (BS-PH 101)" />
          <Subject name="Basic Electrical & Electronics Engg. (ES-EE 101)" />
        </div>
      </div>

      <Motivation />
    </>
  );
}

export default View;
