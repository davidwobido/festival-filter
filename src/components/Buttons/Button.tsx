import styles from "./Button.module.css";
import "../../globals.css";
import { ButtonProps } from "../../../types";

function Button({ size, text, ...props }: ButtonProps): JSX.Element {
  return (
    <button className={styles[size]} {...props}>
      {text}
    </button>
  );
}

export default Button;
