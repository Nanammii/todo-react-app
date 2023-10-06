import {useState} from "react";
import "./project-form.css";

function ProjectForm({addProject}) {
  const [valueInputProject, setValueInputProject] = useState('');

  const handleSubmitForm = (e) => {
    e.preventDefault();

    if (valueInputProject) {
      addProject(valueInputProject);
      setValueInputProject("");
    }
  }

  return (
    <form className="project-form" onSubmit={handleSubmitForm}>
      <input
        type="text"
        placeholder="Create project"
        className="project-input"
        onChange={(e) => setValueInputProject(e.target.value)}
        value={valueInputProject}
      />
      <button type="submit" className="project-button">Add project</button>
    </form>
  );
}

export default ProjectForm;
