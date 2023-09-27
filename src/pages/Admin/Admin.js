import { useState } from "react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../config/fireabase";
import { BaseUrl } from "../../config/apiConfig";
import { useSelector } from "react-redux";

const InputBox = ({ Id, Label, Name, Value, Change, PlaceHolder }) => {
  return (
    <div className="max-w-md mx-auto my-5 sm:flex-row flex-col flex sm:items-center gap-4">
      <label htmlFor={Id} className="font-semibold">
        {Label}
      </label>
      <input
        type="text"
        name={Name}
        value={Value}
        onChange={Change}
        className="py-2 px-4 flex-1 outline-none transition rounded-md shadow-md"
        id={Id}
        required
        placeholder={PlaceHolder}
      />
    </div>
  );
};

const Admin = () => {
  const CurrntUserData = useSelector((state) => state.auth);
  const [FileUploadStatus, setFileUploadStatus] = useState({
    uploading: false,
    progress: 0,
  });
  const initValue = {
    subjectName: "",
    subjectCode: "",
    chapterName: "",
    subjectType: "Theory",
    sem: "1",
    File: "null",
    // uploadedBy: "animeshkum7",
  };
  const [NotesData, setNotesData] = useState(initValue);

  const handleChange = (e) => {
    setNotesData({ ...NotesData, [e.target.name]: e.target.value });
  };

  //for server uploading

  const UploadNotes = async (url) => {
    let APIREQ = await fetch(`${BaseUrl}/upload-notes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...NotesData,
        File: url,
        uploadedBy: CurrntUserData.userEmail,
      }),
    });
    let APIRES = await APIREQ.json();
    if (APIREQ.status == 200) {
      alert(APIRES.message);
      setFileUploadStatus({
        uploading: false,
        progress: 0,
      });
      setNotesData(initValue);
    }
  };

  const submit = (e) => {
    e.preventDefault();
    // file uploading into firebase
    try {
      const storageRef = ref(
        storage,
        `/files/${new Date().getTime() + NotesData.File.name}`
      );
      const uploadTask = uploadBytesResumable(storageRef, NotesData.File);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setFileUploadStatus({
            uploading: true,
            progress: progress,
          });
        },
        (err) => {
          setFileUploadStatus({
            uploading: false,
            progress: 0,
          });
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            UploadNotes(url);
          });
        }
      );
    } catch (err) {
      setFileUploadStatus({
        uploading: false,
        progress: 0,
      });
    }
  };

  return (
    <>
      <div className="w-full h-auto">
        <form className="container mx-auto px-4" onSubmit={submit}>
          <h2 className="text-center mt-12 font-bold text-xl sm:text-2xl">
            Upload Your Notes Here
          </h2>
          <div className="w-full my-8">
            <InputBox
              Id={"Name"}
              Label={"Subject Name"}
              PlaceHolder={"Ex. Mathematics-2"}
              Name="subjectName"
              Value={NotesData.subjectName}
              Change={handleChange}
            />
            <InputBox
              Id={"Code"}
              Label={"Subject Code"}
              PlaceHolder={"Eg. xx-xx 302"}
              Name="subjectCode"
              Value={NotesData.subjectCode}
              Change={handleChange}
            />
            <InputBox
              Id={"Chapter"}
              Label={"Chapter Name"}
              PlaceHolder={"Eg. Quantum Mechanics"}
              Name="chapterName"
              Value={NotesData.chapterName}
              Change={handleChange}
            />
            {/* for subject type  */}
            <div className="flex my-5 items-center max-w-md mx-auto gap-4">
              <label for="type" className="font-semibold">
                Subject Type
              </label>
              <select
                id="type"
                name="subjectType"
                value={NotesData.subjectType}
                onChange={handleChange}
                required
                className="py-3 px-4 flex-1 outline-none transition rounded-md shadow-md text-sm"
              >
                <option value={"Theory"} selected>
                  Theory
                </option>
                <option value={"Practical"}>Practical </option>
              </select>
            </div>
            {/* for sem  */}
            <div className="flex items-center max-w-md mx-auto gap-4">
              <label for="sem" className="font-semibold">
                Choose Sem
              </label>
              <select
                id="sem"
                name="sem"
                value={NotesData.sem}
                onChange={handleChange}
                required
                className="py-3 px-4 flex-1 outline-none transition rounded-md shadow-md text-sm"
              >
                <option value={1} selected>
                  1
                </option>
                <option value={2}>2 </option>
                <option value={3}>3 </option>
                <option value={4}>4 </option>
                <option value={5}>5 </option>
                <option value={6}>6 </option>
                <option value={7}>7 </option>
                <option value={8}>8 </option>
              </select>
            </div>
            {/* upload file */}
            <div className="flex items-center my-5 max-w-md mx-auto gap-4">
              <label className={`font-semibold`} htmlFor="file_input">
                Choose File
              </label>
              <input
                name="File"
                required
                accept="application/pdf"
                onChange={(e) => {
                  setNotesData({ ...NotesData, File: e.target.files[0] });
                }}
                className={`${
                  FileUploadStatus.uploading ? "hidden" : "block"
                } flex-1 outline-none border-none py-2 px-4 shadow-md rounded-md text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="file_input`}
                type="file"
              />
              {/* for progressBar */}
              <div
                className={`flex-1 ${
                  FileUploadStatus.uploading ? "flex" : "hidden"
                } gap-2 items-center py-3 px-4 rouned-md shadow-md bg-white`}
              >
                <span className="text-xs">
                  {FileUploadStatus.progress + "%"}
                </span>
                <div
                  style={{ width: `${FileUploadStatus.progress}%` }}
                  className="h-2 rounded-full bg-blue-400 transition"
                ></div>
              </div>
            </div>
            <button
              type="submit"
              className="block mx-auto w-full max-w-md py-2 px-4 mt-8 transition bg-zinc-800 text-white hover:bg-zinc-600 rounded-md border-2"
            >
              Upload
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Admin;
