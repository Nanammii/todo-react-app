import Header from "../../components/header/header";
import {useParams} from "react-router-dom";
import {STATUS_TASK} from "../../const";
import "./project-page.css";
import Task from "../../components/task/task";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {useState, useEffect} from "react";
import ModalTask from "../../components/modal-task/modal-task";

function ProjectPage() {
  const {projectId} = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tasksList, setTasksList] = useState([]);

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasksList(JSON.parse(savedTasks));
    }
  }, []);

  const addTask = (task, status) => {
    debugger
    const updatedTask = [...tasksList, {id: crypto.randomUUID(), task: task, isCompleted: false,
      isEditing: false, status}];
    setTasksList(updatedTask);
    localStorage.setItem("tasks", JSON.stringify(updatedTask));
  }

  console.log(projectId)

  const handleOpenModal = () => {
    setIsModalOpen(true);
  }

  return (
    <div className="todo-wrapper">
      <Header />
      <div className="status-wrapper">
        {STATUS_TASK.map((status) => (
          <section className="status-column" key={status}>
            <h2 className="status-title">{status}</h2>
            {tasksList
              .filter((task) => task.status === status)
              .map((task, index) => (
              <Task key={index} task={task.task} />
            ))}
            {isModalOpen && <ModalTask
              addTask={addTask}
              currentStatus={status}
              onCloseModal={() => setIsModalOpen(false)}
            />}

            <div className="status-bottom">
              <FontAwesomeIcon icon={faPlus} className="status-icon" />
              <button type="button" className="status-button" onClick={handleOpenModal}>Add new task</button>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default ProjectPage;
