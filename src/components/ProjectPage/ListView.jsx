
//css & other
import '../../style/components/workPage.css';


export default function ListView ({ projects }) {
    return (
        <div className="list-view">
            <div className="list-view-titles">
                <span>Project Name</span>
                    <span>Tools</span>
                    <span>Code & Site</span>
            </div>

            {projects.map((project) => (
                <ul key={project.id}>
                    <a href={project.url[1].url} target="_blank">

                        <li>{project.name}
                            <div className="project-content">
                                {project.techStack.map((tool) => (
                                    <span className="tools-block" key={tool.id}><tool.name/></span>
                                    ))}
                            </div>

                            <div className="project-content">
                                {project.url.map((url) => (
                                    <span className="url-block" key={url.id}>
                                        <a href={url.url} target="_blank"><span><url.icon/></span></a>
                                    </span>
                                ))}

                            </div>
                        </li>
                    </a>


                </ul>
            ))}

        </div>
    )
};
