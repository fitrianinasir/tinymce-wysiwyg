import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import parse from "react-html-parser";
import "./App.css";

function App() {
  const [test, setTest] = useState(undefined);
  const handleEditorChange = (content, editor) => {
    console.log("Content was updated:", content);
    setTest(content);
  };
  return (
    <div className="App">
      <input
        id="my-file"
        type="file"
        name="my-file"
        style={{ display: "none" }}
        onChange=""
      />
      <Editor
        apiKey="r8g25i4kzn1p486i2843mckrzwhiak83zomg4mldr41v6dbu"
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor textcolor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
            "image code",
          ],

          toolbar: `undo redo | formatselect | bold italic forecolor backcolor | fontselect fontsizeselect |
             alignleft aligncenter alignright alignjustify | 
             bullist numlist outdent indent | removeformat | undo redo | link image | help `,
          textcolor_cols: "5",
          file_picker_types: "image",
          images_upload_url: "postAcceptor.php",
          automatic_uploads: false,
        }}
        onEditorChange={handleEditorChange}
      />
      <div>{parse(test)}</div>
    </div>
  );
}

export default App;
