"use client"
import { useState } from "react";
import Image from "next/image";
import FileUpload from "@/public/images/fileUpload.png";
import JobRole from "@/components/jobRole";
import PdfIcon from "@/public/images/pdfIcon.png"

export default function Home() {
  const [viewJobRole, setViewJobRole] = useState(false);
  const [uploadedPdfs, setUploadedPdfs] = useState([]);

  const openJobRole = () => {
    document.body.style.overflow = "hidden";
    setViewJobRole(true);
  }

  const handleUpload = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if(file!==undefined){
      setUploadedPdfs([...uploadedPdfs, file]);
      //console.log(file);
    }
    e.target.value=null;
  }

  const clearUploadedPdf=()=>{
    setUploadedPdfs([]);
  }

  return (
    <>
      {
        viewJobRole ? <JobRole setViewJobRole={setViewJobRole} /> : <></>
      }
      <div className="flex justify-center">
        <div className="max-w-7xl p-4 w-full">

          <div className="mt-20 flex justify-center">
            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full md:w-1/2 border-2 border-[#423DDB] rounded-xl cursor-pointer p-6">
              <div className="flex flex-col items-center justify-center">
                <Image
                  src={FileUpload}
                  height={40}
                  width={40}
                  alt="File upload" />
                <p className="mt-4 text-center"><span className="text-[#423DDB] font-medium">Click to upload PDF</span> or drag and drop</p>
              </div>
              <input id="dropzone-file" type="file" accept="application/pdf" className="hidden" onChange={(e) => handleUpload(e)} />
            </label>
          </div>

          <div className="mt-4 flex justify-center">
            <div className="w-full md:w-1/2 flex flex-col gap-4">
              {
                uploadedPdfs.map((value, key) => (
                  <div className="flex gap-4 border border-gray-200 rounded-xl p-4" key={key}>
                    <Image src={PdfIcon} height={40} width={40} alt="pdfIcon" />
                    <div className="w-full">
                      <div className="text-sm">{value.name}</div>
                      <div className="text-xs text-gray-500">{Math.ceil(value.size/1000)} KB - 100% Uploaded</div>
                    </div>
                    <input type="checkbox" defaultChecked className="h-5 w-5 accent-[#5E5ADB]" />
                  </div>
                ))
              }
            </div>
          </div>

          <div className="flex justify-center items-center gap-4 mt-4">
            <button className="border-2 border-gray-200 hover:bg-gray-50 w-44 py-2 rounded-lg shadow-sm" onClick={clearUploadedPdf} disabled={uploadedPdfs.length===0}>Clear</button>
            <button className="text-white bg-[#5E5ADB] hover:bg-[#423DDB] border-2 border-[#423DDB] w-44 py-2 rounded-lg shadow-sm" onClick={openJobRole} disabled={uploadedPdfs.length===0}>Add Role</button>
          </div>
        </div>
      </div>
    </>
  )
}