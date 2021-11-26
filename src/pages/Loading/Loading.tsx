import React from "react";
import Lottie from "react-lottie";
import animationData from "../../../lib/FF_Animation_loading.json";
import styles from "./Loading.module.css";

function Loading() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.animation}>
        <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
      </div>
    </div>
  );
}

export default Loading;
