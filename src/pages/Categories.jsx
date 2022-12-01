import categoriesStyles from "../stylesheets/pages/Categories.module.css";

function Card(props) {
  return (
    <div className={categoriesStyles.card}>
      <p className={categoriesStyles.title}>
        <span className={categoriesStyles.titleSpan}>Titlte:</span>
        {props.title}
      </p>
      <p className={categoriesStyles.description}>
        <span className={categoriesStyles.descriptionSpan}>Descripción:</span>
        {props.description}
      </p>
    </div>
  );
}

function Categories() {
  return (
    <div className={categoriesStyles.main}>
      <h1 className={categoriesStyles.h1}>XXXX</h1>
      <div className={categoriesStyles.titleContainer}>
        <h3 className={categoriesStyles.h3}> Nº of tasks: XX</h3>
        <h3 className={categoriesStyles.h3}>Nº of tasks completed:XX</h3>
      </div>
      <div className={categoriesStyles.cardContainer}>
        <Card title="It's a title" description="It's a description" />
      </div>
    </div>
  );
}

export default Categories;
