import listStyles from "../stylesheets/components/List.module.css";

function List({ title, data }) {
  return (
    <div className={listStyles.container}>
      <h3 className={listStyles.title}>{title}</h3>
      <ul>
        {data.map((task, id) => (
          <li className={listStyles.list} key={id}>
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
