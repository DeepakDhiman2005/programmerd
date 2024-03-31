"use client"
import React from "react";

// component
import DashBoard from "../page";

const DashBoardSlug = ({params}) => {
    return <>
        <DashBoard slug={params.slug} />
    </>
}

export default DashBoardSlug;