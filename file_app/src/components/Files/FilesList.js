import React, { useState } from "react";
import FileItem from "./FileItem";

function FilesList(props) {
    if (props.files.length === 0) {
        return <h2 className="">No Expenses found.</h2>;
    }

    const onDeleteHandler = (event) => {
        event.preventDefault()
        console.log("Delete event: ", event)
        props.onDeleteFile(event.target.id)
    }

    return (
        <ul className="expenses-list">
            {props.files.map((file) => {
                return (
                    <FileItem
                        key={file.id}
                        id={file.id}
                        onDeleteItem={onDeleteHandler}
                        path={file.path}
                    />
                );
            })}
        </ul>)
}

export default FilesList;