import styles from "./Button.module.css";
import "../../globals.css";

type ButtonProps = {
  size: string;
  text: string;
};

function Button({ size, text }: ButtonProps): JSX.Element {
  return <button className={styles[size]}>{text}</button>;
}

export default Button;
