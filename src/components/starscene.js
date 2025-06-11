// StarField.tsx
import { motion } from "framer-motion";
import { useMemo } from "react";

const NUM_STARS = 80;

export default function StarScene() {
  // Generate fixed random positions
  const stars = useMemo(() => {
    return new Array(NUM_STARS).fill(0).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 5,
    }));
  }, []);

  return (
  <div
  style={{
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
    pointerEvents: "none",
    overflow: "hidden",
  }}
>

      {stars.map((star, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0.2 }}
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            backgroundColor: "white",
            borderRadius: "50%",
            boxShadow: "0 0 4px rgba(255,255,255,0.8)",
            zIndex: 10,
          }}
        />
      ))}
    </div>
  );
}
