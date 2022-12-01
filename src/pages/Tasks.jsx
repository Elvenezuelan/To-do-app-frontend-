import list from "../assets/format_list_bulleted_FILL0_wght400_GRAD0_opsz48.svg";
import { AiOutlineUnorderedList } from "react-icons/ai";
import TasksStyles from "../stylesheets/pages/Tasks.module.css";

function Tag(props) {
  return (
    <div className={TasksStyles.tag}>
      <h3 className={TasksStyles.h3}>{props.title}</h3>
      <div className={TasksStyles.iconContainer}>
        <AiOutlineUnorderedList className={TasksStyles.icon} />
        <p className={TasksStyles.tasksNumber}>{props.tasksNumber}</p>
      </div>
    </div>
  );
}

function Tasks() {
  return (
    <>
      <h2 className={TasksStyles.h2}>Categories</h2>
      <div className={TasksStyles.TagContainer}>
        <Tag title="hello" tasksNumber="4" />
        <Tag title="hello" tasksNumber="4" />
        <Tag title="hello" tasksNumber="4" />
      </div>
      <h2 className={TasksStyles.h2}>Tags</h2>
      <div className={TasksStyles.TagContainer}>
        <Tag title="hello" tasksNumber="4" />
      </div>
    </>
  );
}

export default Tasks;
