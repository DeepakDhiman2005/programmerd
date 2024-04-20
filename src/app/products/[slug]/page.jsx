// components
import ProductDisplay from "@/components/ProductComp/ProductDisplay";

export async function generateStaticParams () {
    return [{slug: "laptops"}, {slug: "mobiles"}, {slug: "cpu"}, {slug: "speaker"}, {slug: "books"}, {slug: "smartwatch"}, {slug: "ps5"}, {slug: "keyboard"}, {slug: "t.v"}, {slug: "games"}, {slug: "hosting"}]
}

const ProductSlug = ({params}) => {
    return <>
        {/* <h2>{params.slug}</h2> */}
        <ProductDisplay slug={params.slug.toLowerCase()} />
    </>
}

export default ProductSlug;