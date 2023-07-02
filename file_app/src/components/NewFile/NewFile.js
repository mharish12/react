import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import FilesForm from "./FilesForm";

export default function NewFile(props) {

    const [isEdit, setIsEdit] = useState(false);

    function onSaveFile(enteredFileData) {
        const file = {
            ...enteredFileData,
            id: uuidv4(),
        };

        props.onAddFile(file);
        setIsEdit(false);

    }

    function startEditingHandler() {
        setIsEdit(true);
    }

    function stopEditingHandler() {
        setIsEdit(false);
    }

    return (
        <div>
            {!isEdit && (
                <button onClick={startEditingHandler}>Add New File</button>
            )}
            {isEdit && (
                <FilesForm
                    onCancel={stopEditingHandler}
                    onSaveFile={onSaveFile}
                />
            )}
        </div>);
}

