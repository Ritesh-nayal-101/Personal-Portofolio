import { useEffect, useState } from "react"
import skills from "../data/skills"

function Skills() {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    setAnimate(true)
  }, [])

  return (
    <section id="skills" className="section">
      <h2>Skills</h2>

      {skills.map((skill, i) => (
        <div key={i} className="skill-bar">
          <span>{skill.name}</span>
          <div className="bar">
            <div
              className="fill"
              style={{
                width: animate ? `${skill.level}%` : "0%"
              }}
            ></div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Skills
