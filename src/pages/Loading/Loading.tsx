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
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
}

export default Loading;
