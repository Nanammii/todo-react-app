import ProjectForm from "../../components/project-form/project-form";
import "./main-page.css";
import {useEffect, useState} from "react";
import Project from "../../components/project/project";
import Header from "../../components/header/header";
import EditProjectForm from "../../components/project-form/edit-project-form";

function MainPage() {
  const [projectsList, setProjectsList] = useState([]);

  useEffect(() => {
    const savedProjects = localStorage.getItem("projects");
    if (savedProjects) {
      setProjectsList(JSON.parse(savedProjects));
    }
  }, []);

  const addProject = (project) => {
    const updatedProject = [...projectsList, {id: crypto.randomUUID(), project: project,
      isEditing: false}];
    setProjectsList(updatedProject);
    localStorage.setItem("projects", JSON.stringify(updatedProject));
  }

  const deleteProject = (id) => {
    const updatedProject = projectsList.filter((project) => project.id !== id)
    setProjectsList(updatedProject);
    localStorage.setItem("projects", JSON.stringify(updatedProject));
  }

  const editTodoProject = (id) => {
    setProjectsList(
      projectsList.map((project) =>
        project.id === id ? {...project, isEditing: !project.isEditing} : project))
  }

  const editProject = (id, task) => {
    const updatedProject = projectsList.map((project) => project.id === id ? {...project, project: task, isEditing: !project.isEditing} : project);
    setProjectsList(updatedProject);
    localStorage.setItem("projects", JSON.stringify(updatedProject));
  }

  return (
    <div className="todo-wrapper">
      <Header />
      <ProjectForm addProject={addProject} />
      {projectsList.map((project) =>
        project.isEditing ? (
          <EditProjectForm key={project.id} editProject={editProject} project={project} />
          ) : (
            <Project
              project={project}
              key={project.id}
              deleteProject={deleteProject}
              editProject={editTodoProject}
            />
        )
      )}
    </div>
  );
}

export default MainPage;
