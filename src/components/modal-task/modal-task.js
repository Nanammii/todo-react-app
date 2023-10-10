import "./modal-task.css";
import {useState} from "react";

function ModalTask({onCloseModal, addTask, currentStatus}) {
  const [detailsTask, setDetailsTask] = useState({
    title: '',

  });

  const handleSubmitTaskForm = (e) => {
    e.preventDefault();

    setDetailsTask({...detailsTask, title: detailsTask.title});

    addTask(detailsTask.title, currentStatus);
    setDetailsTask({title: ''});
  };

  return (
    <div className="modal-task">
      <div className="modal-wrapper">
        <form onSubmit={handleSubmitTaskForm}>
          <input
            type="text"
            placeholder="title task"
            value={detailsTask.title}
            onChange={(e) => setDetailsTask({...detailsTask, title: e.target.value})}
          />
          <button type="submit">Save</button>
          <button onClick={onCloseModal}>Close</button>
        </form>
      </div>
    </div>
  );
}

export default ModalTask;
