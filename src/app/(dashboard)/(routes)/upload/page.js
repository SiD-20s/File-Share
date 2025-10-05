"use client";

"use client";

import React, { useState } from "react";
import UploadForm from "./_components/UploadForm";
import CompleteCheck from "./_components/CompleteCheck"; // same as in your Firestore code
import { supabase } from "../../../../lib/supabaseClient";

function Upload() {
  const [uploadCompleted, setUploadCompleted] = useState(false);
  const [fileUrl, setFileUrl] = useState("");

  const handleUpload = async (file) => {
    if (!file) return;

    try {
      const fileName = `files/${Date.now()}-${file.name}`;

      const { data, error } = await supabase.storage
        .from("file-upload")
        .upload(fileName, file);

      if (error) {
        console.error("Upload error:", error.message);
        return;
      }

      console.log("Uploaded successfully:", data);

      const { data: urlData, error: urlError } = supabase.storage
        .from("file-upload")
        .getPublicUrl(fileName);

      if (urlError) {
        console.error("Error getting public URL:", urlError.message);
        return;
      }

      console.log("Public URL:", urlData.publicUrl);
      setFileUrl(urlData.publicUrl);
      setUploadCompleted(true);
    } catch (err) {
      console.error("Unexpected upload error:", err);
    }
  };

  return (
    <div className="p-5 px-8 md:px-28 text-center">
      {!uploadCompleted ? (
        <div>
          <h2 className="text-[20px] text-center m-5">
            Start{" "}
            <strong className="text-blue-700">
              Uploading File and <span className="text-blue-700">Share</span> it
            </strong>
          </h2>

          <UploadForm uploadBtnClick={handleUpload} />
        </div>
      ) : (
        <CompleteCheck fileUrl={fileUrl} />
      )}
    </div>
  );
}

export default Upload;

