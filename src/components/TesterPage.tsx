import React from "react";
import { motion } from "framer-motion";

interface ConfettiProps {
  boxWidth: number;
  boxHeight: number;
}

const Confetti: React.FC<ConfettiProps> = ({ boxWidth, boxHeight }) => {
  const numConfetti = 50;
  const confettiColor = "gray"; // Single color for simplicity

  // Calculate the center of the box
  const centerX = boxWidth / 2;
  const centerY = boxHeight / 2;

  const confettiVariants = {
    hidden: () => {
      return {
        x: centerX, // Start at the center
        y: centerY, // Start at the center
        opacity: 0,
        scale: 0,
        rotate: 0,
      };
    },
    visible: (i: number) => {
      const angle = (i / numConfetti) * 2 * Math.PI;
      const distance = Math.max(boxWidth, boxHeight); // Ensure confetti reaches the edges

      return {
        x: centerX + distance * Math.cos(angle), // Move outwards along the angle
        y: centerY + distance * Math.sin(angle), // Move outwards along the angle
        opacity: 1, // Fade in
        scale: [0, 1, 0.5], // Scale up, then down
        rotate: 360, // Full rotation
        transition: {
          duration: 1.5,
          ease: "easeOut", // Slow down at the end
          delay: i * 0.02, // Slight delay for a radiating effect.
          opacity: { duration: 1 }, //opacity animation lasts a bit
        },
      };
    },
  };

  return (
    <div
      style={{
        position: "absolute", // Positioned absolutely within the parent
        width: boxWidth, // Same width as the box
        height: boxHeight, // Same height as the box
        left: 0, // Align with the left edge of the box
        top: 0, // Align with the top edge of the box
        zIndex: 1, // Behind the box
        overflow: "hidden", // Hide confetti when they move outside.
      }}
    >
      {Array.from({ length: numConfetti }).map((_, i) => (
        <motion.div
          key={i}
          custom={i}
          variants={confettiVariants}
          initial="hidden"
          animate="visible"
          style={{
            position: "absolute",
            width: "10px",
            height: "10px",
            backgroundColor: confettiColor,
            borderRadius: "50%",
          }}
        />
      ))}
    </div>
  );
};

const TesterPage: React.FC = () => {
  const boxWidth = 100;
  const boxHeight = 100;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "300px", // Container width
        height: "200px", // Container height
        position: "relative", // Needed for absolute positioning of confetti
        border: "1px solid black", //optional
      }}
    >
      <Confetti boxWidth={boxWidth} boxHeight={boxHeight} />

      <div
        style={{
          width: `${boxWidth}px`,
          height: `${boxHeight}px`,
          backgroundColor: "blue",
          borderRadius: "10px",
          zIndex: 2, // Above the confetti
        }}
      />
    </div>
  );
};

export default TesterPage;
