import "./modal-task.css";
import {useState} from "react";

function ModalTask({onCloseModal, addTask, currentStatus}) {
  const [nameTask, setNameTask] = useState('');

  const handleSubmitTaskForm = (e) => {
    e.preventDefault();
    addTask(nameTask, currentStatus);
    setNameTask('');
  }

  return (
    <div className="modal-task">
      <div className="modal-wrapper">
        <form onSubmit={handleSubmitTaskForm}>
          <input
            type="text"
            placeholder="Name task"
            value={nameTask}
            onChange={(e) => setNameTask(e.target.value)}
          />
          <button type="submit">Save</button>
          <button onClick={onCloseModal}>Close</button>
        </form>
      </div>
    </div>
  );
}

export default ModalTask;
