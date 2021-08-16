import styles from "./Loading.module.scss";
import { useState, useEffect } from "react";
export default function Loading() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    setTimeout(() => setMessage("Server is waking up"), 3000);
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.loadingRing}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div>{message}</div>
    </div>
  );
}
