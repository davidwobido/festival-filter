import React, { useEffect, useRef } from "react";
import Lottie from "lottie-web";
import animationData from "../../../lib/FF_loadingscreen_final_pink.json";
import styles from "./Loading.module.css";

function Loading() {
  const animationElement = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (animationElement.current) {
      Lottie.loadAnimation({
        container: animationElement.current,
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      });
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.animation} ref={animationElement} />
    </div>
  );
}

export default Loading;
