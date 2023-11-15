import { useEffect, useState } from "react";
import ProjectItem from "./ProjectItem";

const ProjectsInfo = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch('./projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 lg:w-full w-full gap-4 px-[4vw] justify-center items-center bg-white'>
            {
                projects.map(item => <ProjectItem key={item.id} item={item}></ProjectItem>)
            }
        </div>
    );
};

export default ProjectsInfo;