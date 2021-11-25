import styles from "./Button.module.css";
import "../../globals.css";

type ButtonProps = {
  size: "normal" | "wide" | "small";
  text: string;
  className: string;
};

function Button({ size, text }: ButtonProps): JSX.Element {
  return <button className={styles[size]}>{text}</button>;
}

export default Button;
