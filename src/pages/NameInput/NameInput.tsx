import AddUser from "../../components/AddUser/AddUserForm";
import styles from "./NameInput.module.css";
import LogoLarge from "../../../lib/FF_Logo_large.svg";
import Div100vh from "react-div-100vh";

function NameInput() {
  return (
    <Div100vh className={styles.wrapper}>
      <img src={LogoLarge} className={styles.logo} />
      <div className={styles.content}>
        <span className={styles.preline}>Hello</span>
        <h2 className={styles.headline}>Tell us your name</h2>
        <AddUser navigateTo="/filter" />
      </div>
    </Div100vh>
  );
}
export default NameInput;
