"use client"
import React from "react";

// components
import ProductHostingPage from "./Pages/ProductHostingPage";
import ProductPage from "./Pages/ProductPage";

const ProductDisplay = ({ slug="" }) => {
    return <>
        {
            slug === "hosting" ? <ProductHostingPage />: <ProductPage slug={slug.replace(slug[0], slug[0].toUpperCase())} />
        }
    </>
}

export default ProductDisplay;