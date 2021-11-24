import styles from "./Button.module.css";
import "../../globals.css";

type ButtonProps = {
  size?: "small" | "wide" | "normal";
  text: string;
};

function Button({ size = "normal", text }: ButtonProps): JSX.Element {
  return <button className={styles[{ size }]}>{text}</button>;
}

export default Button;
