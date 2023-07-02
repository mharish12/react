import './App.css';
import React, { useState } from 'react';
import NewFile from "./components/NewFile/NewFile"
import Files from './components/Files/Files';

function App() {
  const RESOURCES_FOLDER = "resources/"

  const DUMMY_FILES = [
    // {
    //   id: "adsasdv-adasda",
    //   name: "Temp Excel",
    //   path: RESOURCES_FOLDER + "temp.xlsx",
    //   file: ""
    // },
    // {
    //   id: "adsvsdrcve-asdvasd",
    //   name: "Temp CSV",
    //   path: RESOURCES_FOLDER + "temp.csv",
    //   file: ""
    // }
  ]

  const [files, setFiles] = useState(DUMMY_FILES)

  function setFileHandler(file) {
    setFiles((prevState) => {
      return [file, ...prevState];
    })
  }

  function onDeleteFile(id) {
    setFiles(files.filter(file => file.id !== id))
  }

  return (
    <div className="App">
      <NewFile onAddFile={setFileHandler}></NewFile>
      <Files onDeleteFile={onDeleteFile} files={files}></Files>
    </div>
  );
}

export default App;
