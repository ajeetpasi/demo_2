import "./todoform.module.css";
const TOdoForm = () => {
  return (
    <div className="main">
      <div className="todo-main">
        <form>
          <div className="form">
            <div className="taskimput">
              <label>Task</label>
              <input type="text" />
            </div>
            <div className="taskimput">
              <label for="cars">Priority</label>
              <select name="cars" id="cars">
                <option value="volvo">High</option>
                <option value="saab">Low</option>
                <option value="mercedes">Medium</option>
              </select>
            </div>
            <div className="taskimput">
              <input type="submit" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TOdoForm;
