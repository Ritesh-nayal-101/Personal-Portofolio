import { useEffect, useState } from "react"
import projects from "../data/projects"
import ProjectCard from "./ProjectCard"

function Projects() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    setShow(true)
  }, [])

  return (
    <section id="projects" className={`section fade-up ${show ? "show" : ""}`}>
      <h2>Projects</h2>
      <div className="grid">
        {projects.map(p => (
        <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  )
}

export default Projects
