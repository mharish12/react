import React, { useState } from "react";
import FilesList from "./FilesList";

function Files(props) {

    return (
        <div>
            <FilesList onDeleteFile={props.onDeleteFile} files={props.files}></FilesList>
        </div>
    )
}

export default Files;