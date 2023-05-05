import React, { useState, useRef } from "react";
import "./uploadImage.css";
export const UploadImage = () => {
  const [files, setFile] = useState();
  const inputRef = useRef();

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    console.log(event.dataTransfer.files);

    var div = document
      .getElementsByClassName("dropzone")
      .style.backgroundImage(files[0]);
  };

  return (
    <>
      {!files && (
        <div
          className="dropzone"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <h1>Drag and Drop Files to upload</h1>
          <h1>Or</h1>
          <input
            type="file"
            onChange={(event) => event.target.files}
            hidden
            ref={inputRef}
          />

          <button
            onClick={() => inputRef.current.click()}
            className="upload-btn"
          >
            Select Files
          </button>
        </div>
      )}
    </>
  );
};
