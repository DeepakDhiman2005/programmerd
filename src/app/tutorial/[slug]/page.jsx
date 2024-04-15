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
    let _data = [
        {
            key: "Introduction",
            points: ["Python Overview", "install python with vs code", "write first program in python", "python structure"]
        },
        {
            key: "python string",
            points: ["Python String", "Operation in String", "Methods of String", "Format String"]
        },
        {
            key: "python string",
            points: ["Python String", "Operation in String", "Methods of String", "Format String"]
        },
        {
            key: "python string",
            points: ["Python String", "Operation in String", "Methods of String", "Format String"]
        },
        {
            key: "python string",
            points: ["Python String", "Operation in String", "Methods of String", "Format String"]
        },
        {
            key: "python string",
            points: ["Python String", "Operation in String", "Methods of String", "Format String"]
        }
    ]
    let _data2 = [
        {
            // title: "Python Overview",
            title: params.slug === "python" ? "Python Overview": params.slug,
            content: [
                {
                    title: "What is Python?",
                    points: ["what is programming lanuage.", "python is hight level lanuage."],
                },
                {
                    code: [`print("Hello world")`, `num = input("Enter your name: ")`]
                },
                {
                    title: "Features of Python",
                    points: ["programming lanuage.", "hight level lanuage.", "Easy to use."]
                },
                {
                    title: "Python image",
                    image: {
                        image: "/image/programming.jpg",
                        width: 500,
                        height: 500
                        // className: "w-auto"
                    }
                },
                {
                    title: "Check my course!",
                    points: ["this is tailwindcss course:"],
                    image: {
                        image: "/image/image1.jpg",
                        width: 600,
                        height: 600
                    }
                },
                {
                    title: "Play Audio",
                    audio: "/sound/send.mp3"
                },
                {
                    title: "Code Writer!",
                    video: {
                        video: "/videos/video1.mp4",
                        loop: false
                    }
                }
            ]
        }
    ]

    return <>
        <TutorialDisplay title={params.slug} keys={_data} values={_data2} />
    </>
}

export default TutorialStart