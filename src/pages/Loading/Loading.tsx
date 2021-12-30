import React, { useEffect, useRef } from "react";
import Lottie from "lottie-web";
import animationData from "../../../lib/FF_loadingscreen_final_pink.json";
import styles from "./Loading.module.css";
import Div100vh from "react-div-100vh";

function Loading() {
  const animationElement = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (animationElement.current) {
      Lottie.loadAnimation({
        container: animationElement.current,
        loop: false,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      });
    }
  }, []);

  return (
    <Div100vh className={styles.wrapper}>
      <div className={styles.animation} ref={animationElement} />
    </Div100vh>
  );
}

export default Loading;
