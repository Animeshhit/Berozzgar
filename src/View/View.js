import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BaseUrl } from "../config/apiConfig";

const View = ({ Lprogress }) => {
  const Navigate = useNavigate();
  const { id, sem } = useParams();
  const [File, setFile] = useState("/loading.pdf");
  const getFile = async () => {
    Lprogress(40);
    let token = localStorage.getItem("Engine_Token");
    let APIREQ = await fetch(
      `${BaseUrl}/notesofsem?sem=${sem}&api_key=${token}`
    );
    let APIRES = await APIREQ.json();
    if (APIREQ.status == 200) {
      setFile(APIRES.find((item) => item._id == id).File);
    } else {
      Navigate("/auth/register", { replace: true });
      setFile("/loading.pdf");
    }
    Lprogress(100);
  };
  useEffect(() => {
    getFile();
  }, [id, sem]);
  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
      <div
        style={{
          minHeight: "100vh",
        }}
      >
        {File && <Viewer fileUrl={File} />}
      </div>
    </Worker>
  );
};

export default View;
