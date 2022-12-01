import { useRef, useState, useEffect } from "react";
import img from "../assets/Shiny Happy Morning Jog2.png";
import createTaskStyles from "../stylesheets/pages/CreateTask.module.css";
import iconX from "../assets/circle_x.svg";
import { FaRegTimesCircle } from "react-icons/fa";

function Tag(props) {
  const imgRef = useRef(null);
  return (
    <div key={props.id} className={createTaskStyles.tag}>
      <p>{`${props.children} `} </p>
      <div ref={imgRef}>
        <FaRegTimesCircle
          // src={iconX}
          alt="Eliminate the tag/category"
          className={createTaskStyles.iconX}
          onClick={() => {
            props.deleteTag(props.id);
          }}
        />
      </div>
    </div>
  );
}

function TagInput({
  elems,
  setElement,
  type,
  setIsFieldFocus,
  isFieldFocus,
  list,
}) {
  const [response, setResponse] = useState([]);
  const [text, setText] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  const inputRef = useRef("");

  function handleContainerClick(e) {
    inputRef.current.focus();
  }
  useEffect(() => {
    let options = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${localStorage.getItem("token")}`,
      },
    };
    fetch(`http://localhost:5000/api/auth/${type}`, options)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.rows);
        setResponse(data.rows);
      });
  }, []);

  function handleTagClick(id) {
    let index = id == 0 ? id : id - 1;
    console.log(index);
    if (index !== 0) {
      elems.splice(index, 1);
    } else {
      elems.shift();
    }

    setElement([...elems]);
  }
  function handleClick(e) {
    console.log(e.target.innerHTML);
    setElement([...elems, e.target.innerHTML]);
    setIsFieldFocus(true);
    e.target.value = "";
    inputRef.current.focus();
  }

  // function handleBlur(e) {
  //   if (inputRef.current.value.trim() != "") {
  //     setElement([...elems, e.target.value.trim()]);
  //     e.target.value = " ";
  //     setText(" ");
  //   }
  //   setIsFocus(false);
  // }
  let id = 0;
  function handleInput(e) {
    if (e.target.value.trim() != "") {
      return setText(e.target.value);
    }
    setText("");
  }

  function handleFocus() {
    console.log("FOCUS");
    setIsFieldFocus(true);
  }

  return (
    <div
      className={createTaskStyles.tagInputContainer}
      ref={list}
      onClick={(e) => handleContainerClick(e)}
    >
      {elems.map((e, index) => {
        id++;
        return (
          <Tag key={index} id={id} deleteTag={handleTagClick}>
            {e}
          </Tag>
        );
      })}
      <div className={createTaskStyles.inputContainer}>
        <input
          type="text"
          className={createTaskStyles.tagInput}
          ref={inputRef}
          // onBlur={(e) => handleBlur(e)}
          onInput={(e) => handleInput(e)}
          onFocus={handleFocus}
        />
        <ul
          className={`${createTaskStyles.list} ${
            isFieldFocus ? createTaskStyles.visible : ""
          }`}
        >
          {response.map((e) => {
            return (
              <li
                key={e.id}
                className={createTaskStyles.listItem}
                onClick={(e) => handleClick(e)}
              >
                {e.category_title}
              </li>
            );
          })}
          {text.trim() == "" ? (
            <></>
          ) : (
            <li key={0} className={createTaskStyles.listItem}>
              {text}
            </li>
          )}
          ;
        </ul>
      </div>
    </div>
  );
}

function Form({
  isCategoryFocus,
  setIsCategoryFocus,
  isTagsFocus,
  setIsTagsFocus,
  categoryList,
  tagsList,
}) {
  let [tags, setTags] = useState([]);
  let [category, setCategory] = useState([]);
  function submitHandler(e) {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const formData = Object.fromEntries(new FormData(e.target));
    console.log(formData, tags, category);
    const data = { ...formData, tags, category: category[0] };
    console.log(data);
    // const option = {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     authorization: `bearer ${token}`,
    //   },
    // };
    // fetch("http");
  }
  return (
    <div className={createTaskStyles.formContainer}>
      <h1 className={createTaskStyles.h1}>New tasks</h1>
      <form
        action="/tasks/newTask"
        method="post"
        className={createTaskStyles.form}
        onSubmit={(e) => submitHandler(e)}
      >
        <input
          type="text"
          placeholder="Title"
          name="title"
          className={createTaskStyles.input}
        />
        <textarea
          name="description"
          id=""
          cols="30"
          rows="10"
          placeholder="description"
          className={createTaskStyles.textarea}
        ></textarea>
        <TagInput
          elems={category}
          setElement={setCategory}
          type="categories"
          isFieldFocus={isCategoryFocus}
          setIsFieldFocus={setIsCategoryFocus}
          list={categoryList}
        />
        <TagInput
          elems={tags}
          setElement={setTags}
          type="tags"
          isFieldFocus={isTagsFocus}
          setIsFieldFocus={setIsTagsFocus}
          list={tagsList}
        />
        <button type="submit" className={createTaskStyles.button}>
          Create tasks
        </button>
      </form>
    </div>
  );
}

function CreateTask() {
  const [isCategoryFocus, setIsCategoryFocus] = useState(false);
  const [isTagsFocus, setIsTagsFocus] = useState(false);
  const categoryContainerInput = document.querySelectorAll(
    `.${createTaskStyles.tagInputContainer}`
  )[0];
  const categoryInput = document.querySelectorAll(
    `.${createTaskStyles.tagInput}`
  )[0];
  const tagsInput = useRef(null);
  function handleClick(e) {
    if (e.target !== categoryContainerInput && e.target !== categoryInput) {
      return setIsCategoryFocus(false);
    }
    if (e.target !== tagsInput) return setIsTagsFocus(false);
  }
  return (
    <div className={createTaskStyles.main} onClick={(e) => handleClick(e)}>
      <img src={img} alt=" " className={createTaskStyles.img} />
      <Form
        isCategoryFocus={isCategoryFocus}
        setIsCategoryFocus={setIsCategoryFocus}
        isTagsFocus={isTagsFocus}
        setIsTagsFocus={setIsTagsFocus}
        categoryInput={categoryContainerInput}
        tagsInput={tagsInput}
      />
    </div>
  );
}

export default CreateTask;
