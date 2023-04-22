import { useState, useEffect } from "react";

export default function Skill() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const getSkill = async () => {
      let response = await fetch(
        "http://laravel.tamaraebi.ca/api/skills"
    );
      let data = await response.json();
      setSkills(data);
    };
    getSkill();
  }, []);

  return (
    <div>
      <h1 id="skills_head">Skills</h1>
      <div id="skills">
        {skills.map((skill) => (
          <div key={skill.id}>
            <p>{skill.language}</p>
          </div>
        ))}
      </div>
    </div>
  );
}