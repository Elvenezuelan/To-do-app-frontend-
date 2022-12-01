import { Link } from "react-router-dom";
import loginButtonStyles from "../stylesheets/components/LoginButton.module.css";

function LoginButton(props) {
  let buttonContent = props.isLogger ? "Log in" : "Sign up";

  return (
    <div className={loginButtonStyles.container}>
      <Link
        to={props.isLogger ? "/login" : "/signup"}
        className={loginButtonStyles.Link}
      >
        {buttonContent}
      </Link>
    </div>
  );
}

export default LoginButton;
