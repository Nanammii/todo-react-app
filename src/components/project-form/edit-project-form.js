import {useState} from "react";

function EditProjectForm({editProject, project}) {
  const [valueProject, setValueProject] = useState(project.project);

  const handleSubmit = (e) => {
    e.preventDefault();
    editProject(project.id, valueProject);
  }
  return (
    <form className="project-form" onSubmit={handleSubmit}>
      <input type="text" placeholder="Update project" className="project-input"
             onChange={(e) => setValueProject(e.target.value)} value={valueProject}
      />
      <button type="submit" className="project-button">Save project</button>
    </form>
  );
}

export default EditProjectForm
