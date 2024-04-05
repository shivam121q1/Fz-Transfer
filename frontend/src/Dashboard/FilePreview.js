import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Fileimage from "./components/Fileimage";
import Fileinfo from "./components/Fileinfo";
import { ArrowLeftSquare } from "lucide-react";

import Sharebox from "./components/Sharebox";

const FilePreview = () => {
  const { fileid } = useParams();
  const [file, setfile] = useState();
  const [share, setshare] = useState(false);

  const opemmodalhandeler = (data) => {
    console.log(data);
    setshare(data);
  };
  const closeHanler = () => {
    setshare(false);
  };
  const fetchData = () => {
    const parsedresp = (dataval) => {
      if (dataval && dataval.file) {
        console.log(dataval.file);
        setfile(dataval.file);
      } else {
        console.log("No data is present");
      }
    };
    const response = (data) => {
      data.json().then(parsedresp);
    };
    try {
      fetch(`http://localhost:4000/api/v1/filepreview/${fileid}`, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain",
        },
      })
        .then(response)
        .catch(() => {
          console.log("Error in fetch function");
        });
    } catch (error) {
      console.log("Error occurred at file Preview: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-full h-[100%] px-10 py-10 text-white bg-gray-900 relative">
      <Link
        to="/Upload"
        className="flex gap-3 border w-40 justify-center items-center p-2 rounded-lg "
      >
        {" "}
        <ArrowLeftSquare /> Go to Upload
      </Link>

      <div className="grid grid-col-2 mt-2 md:grid-cols-2 border-2 rounded-xl border-white">
        <Fileimage file={file} share={opemmodalhandeler}></Fileimage>
        <Fileinfo file={file} />

        {share && <Sharebox url = {`http://localhost:3000/filepreview/${file?.fileid}`} Share={closeHanler} /> }
      </div>
      <div className=""></div>
    </div>
  );
};

export default FilePreview;
