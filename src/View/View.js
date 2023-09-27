import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BaseUrl } from "../config/apiConfig";
const View = () => {
  const { id, sem } = useParams();
  const [File, setFile] = useState("null");
  const getFile = async () => {
    let token = localStorage.getItem("Engine_Token");
    let APIREQ = await fetch(
      `${BaseUrl}/notesofsem?sem=${sem}&api_key=${token}`
    );
    let APIRES = await APIREQ.json();
    if (APIREQ.status == 200) {
      setFile(APIRES.find((item) => item._id == id).File);
    } else {
      setFile(
        "https://firebasestorage.googleapis.com/v0/b/berozgar-1725c.appspot.com/o/NO%20Access.pdf?alt=media&token=1b850de3-21b7-4fbe-8a4d-aed9c48a7517&_gl=1*3i2sri*_ga*MTg5OTM0OTA4LjE2OTE4NTM3OTQ.*_ga_CW55HF8NVT*MTY5NTg0NDcyMy43LjEuMTY5NTg0NDgyMS4yNC4wLjA."
      );
    }
  };
  useEffect(() => {
    getFile();
  }, [id, sem]);
  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
      <div
        style={{
          border: "1px solid rgba(0, 0, 0, 0.3)",
          height: "750px",
        }}
      >
        {File && <Viewer fileUrl={File} />}
      </div>
    </Worker>
  );
};

export default View;
