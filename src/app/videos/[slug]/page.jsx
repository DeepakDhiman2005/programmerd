// component
import CourseIndex from "@/components/CoursesComp/CourseIndex";

const VideoCoursePage = ({ params }) => {
    return <>
        <CourseIndex slug={params.slug} />
    </>
}

export default VideoCoursePage;