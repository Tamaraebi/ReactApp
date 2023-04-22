import { useState, useEffect } from "react";

export default function Education() {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    const getEducation = async () => {
      let response = await fetch(
        "http://laravel.tamaraebi.ca/api/education"
      );
      let data = await response.json();
      setEducation(data);
    };
    getEducation();
  }, []);

  return (
    <div>
      <h1 id="education_head">Education</h1>
      <div id="education">
        {education.map((education) => (
          <div key={education.id}>
            <h4>{education.institution}</h4>
            <p>{education.description}</p>
            <p>{education.certification}</p>
            <p>{education.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}