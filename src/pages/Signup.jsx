import loginStyles from "../stylesheets/pages/Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";

function Form(props) {
  const btn = useRef({ current: { disabled: false } });
  const password = useRef(null);
  const passwordConfirmation = useRef(null);
  const email = useRef(null);
  const navigate = useNavigate();
  let [authorization, setAuthorization] = useState(false);
  btn.current.disabled = authorization;
  console.log(btn.current.disable, authorization, btn.current);

  function changeHandler() {
    let passwordValue = password.current.value;
    let passwordConfirmationValue = passwordConfirmation.current.value;
    let validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    let isEmail = validEmail.test(email.current.value);

    if (
      passwordValue == passwordConfirmationValue &&
      passwordValue !== "" &&
      passwordValue.length > 4 &&
      isEmail
    ) {
      setAuthorization(false);
    } else {
      setAuthorization(true);
    }
  }
  const submitHandler = (e) => {
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    console.log(data);

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    console.log(options.body);
    return fetch("http://localhost:5000/api/user/signup", options)
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.token);
        return navigate("/tasks");
      })
      .catch((err) => console.log(err));
    // fetch("http://localhost:5000/api/user/signup", options)
    //   .then((response) => response.json())
    //   .then((response) => console.log(response))
    //   .catch((err) => console.error(err));
  };

  return (
    <form
      method="POST"
      action="http://localhost:5000/api/user/signup"
      className={loginStyles.form}
      onSubmit={(e) => submitHandler(e)}
    >
      <input
        className={loginStyles.input}
        type="email"
        name="email"
        placeholder="email"
        ref={email}
        onChange={changeHandler}
      />
      <input
        className={loginStyles.input}
        type="password"
        placeholder="password"
        name="password"
        ref={password}
        onChange={changeHandler}
      />
      <input
        className={loginStyles.input}
        type="password"
        placeholder="repeat your password"
        ref={passwordConfirmation}
        onChange={changeHandler}
      />
      <button className={loginStyles.button} ref={btn} type="submit">
        Sign up
      </button>
      <p className={loginStyles.p}>
        if you already have an account <Link to="/login">log in</Link>
      </p>
    </form>
  );
}

function Signup() {
  return (
    <main className={loginStyles.main}>
      <div className={loginStyles.formContainer}>
        <h3 className={loginStyles.h3}>Be part of us</h3>
        <Form />
      </div>
    </main>
  );
}

export default Signup;
