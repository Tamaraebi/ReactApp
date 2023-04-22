import { useState, useEffect } from "react";

export default function Project() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getProject = async () => {
      let response = await fetch(
        "http://laravel.tamaraebi.ca/api/projects"
      );
      let data = await response.json();
  
      setProjects(data);
    };
    getProject();
  }, []);

  return (
    <div id="project_all">
      <h1 id="project_head">Projects</h1>
      <div id="projects">
        {projects.map((project) => (
          <div key={project.id} className="individualproject">
            <a id="title" href={project.url}>
              <h4>{project.title}</h4>
            </a>
            <p>{project.content}</p>
            <p>{project.skill.language}</p>
          </div>
        ))}
      </div>
    </div>
  );
}