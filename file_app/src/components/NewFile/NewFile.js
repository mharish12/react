import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import FilesForm from "./FilesForm";
import Button from '../Button/Button'
import classes from './NewFile.module.css'

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
        <div className={classes.outline}>
            {!isEdit && (
                <Button onClick={startEditingHandler}>Add New File</Button>
            )}
            {isEdit && (
                <FilesForm
                    onCancel={stopEditingHandler}
                    onSaveFile={onSaveFile}
                />
            )}
        </div>);
}

