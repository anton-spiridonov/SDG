import Img from "../../assets/img/people.png";
import { Info } from "../../components/info";
import { Modal } from "../../components/modal";

import styles from "./styles.module.scss";

export const MainPage = () => {
  const token = localStorage.getItem("token");

  if (token) {
    window.location.href = ` https://www.dating.com/people/#token=${token}`;
  }

  return (
    <main className={styles.wrapper}>
      <img className={styles.img} src={Img} alt="img" />
      <Info />
      <Modal />
    </main>
  );
};
