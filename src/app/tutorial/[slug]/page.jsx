// components
import TutorialDisplay from "@/components/TutorialsComp/TutorialDisplay";

export async function generateStaticParams (){
    // const resp = await getTutorialData();
    return [{slug: "python"}, {slug: "c"}, {slug: "cpp"}, {slug: "js"}, {slug: "html"}, {slug: "css"}, {slug: "reactjs"}]
}

// async function getTutorialData () {
//     const resp = await fetch("/api/tutorials/", { method: "GET", cache: "no-store" });
//     const data = await resp.json();
//     return data;
// }

const TutorialStart = async ({ params }) => {
    // const tutorial = await getTutorialData();
    // console.log(tutorial.data);
    // sidebar data

    return <>
        <TutorialDisplay title={params.slug} />
    </>
}

export default TutorialStart