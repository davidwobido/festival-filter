import styles from "./Button.module.css";
import "../../globals.css";

type ButtonProps = {
  size: string;
  text: string;
};

function Button({ text }: ButtonProps): JSX.Element {
  return <button className={styles.small}>{text}</button>;
}

export default Button;
