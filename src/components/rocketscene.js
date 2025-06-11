import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import rocket from "../assets/rocketship.svg";
import rocketlanded from "../assets/rocketship-landed.svg";
import moon from "../assets/moon.svg";

export default function RocketScene() {
  const rocketControls = useAnimation();
  const moonControls = useAnimation();

  const rocketRef = useRef(null);
  //   const rocket2Ref = useRef(null);
  const moonRef = useRef(null);

  const [landed, setLanded] = useState(false);

  useEffect(() => {
    const sequence = async () => {
      // Rocket flies in
      await rocketControls.start({
        x: "100%",
        y: "30%",
        rotate: [0,45],
        transition: { duration: 3, ease: "easeInOut" },
      });

      // Moon fades in
      moonControls.start({
        opacity: 1,
        transition: { duration: 1.5 },
      });

      // Rocket begins landing
      await rocketControls.start({
        top: "80px",
        left: "calc(100% - 380px)",
        rotate: [360, 0],
        transition: { duration: 2 },
      });

      // Final descent
      await rocketControls.start({
        top: "85px",
        transition: { duration: 1.5 },
      });

      setLanded(true);
      await rocketControls.start({
        top: "90px",
        opacity: 1,
        transition: { duration: 0.5 },
      });
    };
 sequence();
}, [rocketControls, moonControls]);

  return (
    <>
      {/* Moon */}
      <motion.img
        ref={moonRef}
        src={moon}
        alt="moon"
        initial={{ opacity: 0 }}
        animate={moonControls}
        style={{
          position: "absolute",
          top: "150px",
          right: "200px",
          width: 120,
          opacity: 0.8,
          zIndex: 0,
        }}
      />

      {/* Rocket */}
      <motion.img
        ref={rocketRef}
        src={landed ? rocketlanded : rocket}
        alt="rocket"
        initial={{ bottom: "65%", left: "-60px" }}
        animate={rocketControls}
        style={{
          position: "absolute",
          width: 80,
          zIndex: 0,
        }}
      />

    </>
  );
}
