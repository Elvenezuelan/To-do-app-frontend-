import loginStyles from "../stylesheets/pages/Login.module.css";
import { Link } from "react-router-dom"

function Login() {
  return (
    <main className={loginStyles.main}>
      <div className={loginStyles.formContainer}>
        <h3 className={loginStyles.h3}>Happy to see you again</h3>
        <form className={loginStyles.form}>
          <input
            type="email"
            name="email"
            placeholder="email"
            className={loginStyles.input}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            className={loginStyles.input}
          />
          <button type="submit" className={loginStyles.button}>Log in</button>
          <p className={loginStyles.p}>If you don't have an account. please <Link to="/signup"> sign up </Link></p>
        </form>
      </div>
    </main>
  );
}

export default Login;
