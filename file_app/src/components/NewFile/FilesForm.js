import React, { useState } from "react";
import classes from "./FilesForm.module.css"

function FilesForm(props) {

    const [formIsValid, setFormIsValid] = useState(false)

    const [enteredFile, setFile] = useState({});

    const fileHandler = (event) => {
        event.preventDefault()
        // console.log("event.target.value", event.target.value)
        // console.log(event.target.value)
        if (event.target.value !== null) {
            setFormIsValid(true)
            setFile(event.target.value)
        } else {
            setFormIsValid(false)
        }
    }

    const fileSubmitHandler = (event) => {
        event.preventDefault();

        const enteredFileData = {
            path: enteredFile,
        };

        console.log(enteredFileData);
        props.onSaveFile(enteredFileData);
    }

    return (
        <form onSubmit={fileSubmitHandler} className="">
            <div>
                <div>
                    <label htmlFor="file">File details</label>
                    <input
                        type="file"
                        id="file"
                        accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                        // value={enteredFile}
                        onChange={fileHandler}
                    />
                </div>

                <div className="">
                    <button type="button" onClick={props.onCancel}>
                        Cancel
                    </button>
                    <button type="submit" disabled={!formIsValid}>Add File</button>
                </div>
            </div>
        </form>);
}

export default FilesForm;