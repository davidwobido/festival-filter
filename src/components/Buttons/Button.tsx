import styles from "./Button.module.css";
import "../../globals.css";

type ButtonProps = {
  size: "normal" | "wide" | "small";
  text: string;
  onClick?: () => void;
};

function Button({ size, text, ...props }: ButtonProps): JSX.Element {
  return (
    <button className={styles[size]} {...props}>
      {text}
    </button>
  );
}

export default Button;
