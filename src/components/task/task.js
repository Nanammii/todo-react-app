import "./task.css";
import {Link} from "react-router-dom";
import {AppRoute} from "../../const";

function Task({task}) {
  return (
    <div className="task-list">
      <Link to={AppRoute.Modal}>
        <span>{task.index}</span>
        <h3>{task}</h3>
        <p>Дата создания</p>
        <span>Текущий статус</span>
      </Link>
    </div>
  );
}

export default Task;
