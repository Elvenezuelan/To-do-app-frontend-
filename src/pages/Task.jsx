import taskStyles from "../stylesheets/pages/Task.module.css";

function Task() {
  return (
    <main className={taskStyles.main}>
      <h1 className={taskStyles.h1}>ukjhkj</h1>
      <div className={taskStyles.h3Container}>
        <h3 className={taskStyles.h3}>status: </h3>
        <h3 className={taskStyles.h3}> date of ending: </h3>
      </div>
      <p className={taskStyles.p}>
        {" "}
        <span className={taskStyles.pSpan}>description:</span>
      </p>
    </main>
  );
}

export default Task;
