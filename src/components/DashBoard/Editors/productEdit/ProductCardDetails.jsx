"use client"
import React from "react";

// icons
import { GoLinkExternal } from "react-icons/go";

// components
import Button from "@/components/Button";

const ProductCardDetails = ({ data = {}, title = "", id, onDelete = function () { }, value = function () { } }) => {
    return <>
        <div className="w-full p-3 border border-solid flex mt-3 mb-3 justify-between items-center rounded-sm bg-slate-50">
            <div className="flex justify-center items-center">
                <span className="text-slate-600">{title}</span>
            </div>
            <div className="flex justify-center items-center">
                <Button color="purple" className="flex justify-center items-center rounded-sm pl-3 pr-3" onClick={() => { value(true) }}>
                    <span>Edit</span>
                    <GoLinkExternal size={"15px"} className="ml-2" />
                </Button>
                <Button color="red" className="ml-2" onClick={() => {
                    onDelete({ delete: true, data: data, title: title, id: id });
                }}>Delete</Button>
            </div>
        </div>
    </>
}

export default ProductCardDetails;