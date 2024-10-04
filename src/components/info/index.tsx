import { useDispatch } from "react-redux";
import { Button } from "../button";
import styles from "./styles.module.scss";
import { openModel } from "../modal/model";

export const Info = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>How to Participate</h1>
        <div className={styles.step}>
          <span className={styles.number}>1.</span>
          <span className={styles.text}>Subscribe to our News</span>
        </div>
        <div className={styles.step}>
          <span className={styles.number}>2.</span>
          <Button onClick={() => dispatch(openModel(true))} text="Sign Up" />
        </div>
        <div className={styles.step}>
          <span className={styles.number}>3.</span>
          <span className={styles.text}>Check your email inbox</span>
        </div>
        <div className={styles.step}>
          <span className={styles.number}>4.</span>
          <span className={styles.text}>Wait till September 22</span>
        </div>
      </div>
    </>
  );
};
