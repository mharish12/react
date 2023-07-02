import React, { useState } from "react";
import Card from '../UI/Card'

export default function FileItem(props) {

    console.log("FileItem Props", props)

    return (
        <li>
            <Card>
                <h3>{props.path}</h3>
                <button key={props.id} id={props.id} onClick={props.onDeleteItem}>Delete</button>
            </Card>

        </li>
    );
}