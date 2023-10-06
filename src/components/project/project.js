import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPenToSquare, faTrash} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import "./project.css";
import {AppRoute} from "../../const";

function Project({project, deleteProject, editProject}) {
  return (
    <div className="project">
      <p className="project-text">
        <Link to={`${AppRoute.Project}/${project.id}`}>{project.project}</Link>
      </p>
      <div className="project-icons">
        <FontAwesomeIcon icon={faPenToSquare} onClick={() => editProject(project.id)} />
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteProject(project.id)} />
      </div>
    </div>
  );
}

export default Project;
