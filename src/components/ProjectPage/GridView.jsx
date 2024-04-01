
//css & other
import '../../style/components/workPage.css';


export default function ({ projects }) {
    return (
        <div className="grid-view">
            {projects.map((project) => (
                <ul >
                    <li key={project.id} >
                        <div style={{ fontWeight: "bold" }}>{project.name}</div>
                        <div className="project-item" >
                            <a href={project.url[1].url} target="_blank">
                                <div className="thumb">
                                    <img src={project.img} alt="project" />
                                </div>
                                <div className="thumb-inner" >

                                    <p>
                                        {project.description}

                                    </p>
                                    <p>
                                        {project.techStack.map((tool) => (
                                            <span className="tools-block-grid" key={tool.id}><tool.name /></span>
                                        ))}
                                    </p>
                                    <p >
                                        {project.url.map((url) => (
                                            <span className="tools-block-grid" key={url.id}>
                                                <a href={url.url} target="_blank"><span><url.icon /></span></a>
                                            </span>
                                        ))}
                                    </p>


                                </div>
                            </a>

                        </div>

                    </li>

                </ul>
            ))}
        </div>
    )
};
