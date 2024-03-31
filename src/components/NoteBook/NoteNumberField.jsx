"use client"
import React from "react";

const NoteNumberField = ({id, number=0}) => {
    return <>
        <label className="pt-1 pb-1 w-full h-full cursor-pointer text-center" htmlFor={id}>{number}</label>
    </>
}

export default NoteNumberField;