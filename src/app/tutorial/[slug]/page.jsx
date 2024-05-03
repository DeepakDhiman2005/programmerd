// components
import TutorialDisplay from "@/components/TutorialsComp/TutorialDisplay";

import { getTutorialData } from "@/fetchapi/getTutorialData";

export async function generateStaticParams (){
    // const resp = await getTutorialData();
    // return resp.map((tutorial)=>{
    //     slug: tutorial.path
    // })
    // return [{slug: "python"}, {slug: "c"}, {slug: "cpp"}, {slug: "js"}, {slug: "html"}, {slug: "css"}, {slug: "reactjs"}]
    return [{slug: "html"}, {slug: "css"}, {slug: "js"}]
}

export async function generateMetadata({params, searchParams}) {
    const resp = await getTutorialData();
    const tutorial = resp.filter((data)=>data.path === params.slug ? params.slug: null);
    const tutor = tutorial[0].data;
    const image = tutorial[0].image;
    const title = tutorial[0].title;
    // console.log(tutor);

    let content = {};
    tutor.map((page)=>{
        page.page.map((data)=>{
            if(data.title.toLowerCase() === searchParams.query){
                content = data;
            }
        })
    })
    // console.log(content);
    return {
        title: content.title + " - in " + title,
        description: content.content[0].desc,
        openGraph: {
            images: [image]
        }
    }
}

const TutorialStart = async (props) => {
    return <>
        <TutorialDisplay title={props.params.slug} query={props.searchParams.query} />
    </>
}

export default TutorialStart