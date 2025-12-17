function ProjectCard({ project }) {
  return (
    <div className="card">
      <h3>{project.title}</h3>
      <p>{project.desc}</p>
      <div className="tags">
        {project.tech.map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </div>
      <br></br>
      <a href={project.github} target="_blank">GitHub</a>
    </div>
  )
}

export default ProjectCard
