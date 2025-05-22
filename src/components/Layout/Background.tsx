// import React from "react";
import { motion } from "motion/react";

export const Background = () => {
  return (
    <div>
      {/*
      ========================================
        Blob Animation
      ======================================== 
      */}

      {/* Mobile screens */}
      <div className="md:hidden h-full w-screen fixed inset-0 overflow-x-hidden">
        <motion.div
          className="fixed w-[400px] h-[400px] bg-black/35 rounded-full blur-3xl"
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -100, 50, 0],
            scale: [0.5, 0.4, 0.4, 0.5],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ top: "50%", left: "10%" }}
        />
        <motion.div
          className="fixed w-[300px] h-[300px] bg-black/60 rounded-full blur-3xl"
          animate={{
            x: [0, -150, 100, 0],
            y: [0, 80, -120, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ bottom: "10%", left: "5%" }}
        />
        <motion.div
          className="fixed w-[300px] h-[300px] bg-black/50 rounded-full blur-3xl"
          animate={{
            x: [0, 120, -80, 0],
            y: [0, -70, 130, 0],
            scale: [0.4, 0.6, 0.4, 0.5],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ top: "45%", left: "3%" }}
        />
      </div>

      {/* Bigger Screens  */}
      <div className="max-md:hidden h-full w-screen fixed inset-0 overflow-x-hidden">
        <motion.div
          className="fixed w-full h-screen bg-black/40 rounded-full blur-3xl"
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -100, 50, 0],
            scale: [0.5, 0.4, 0.4, 0.5],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ top: "-10%", left: "-25%" }}
        />
        <motion.div
          className="fixed w-[600px] h-[600px] bg-black/70 rounded-full blur-3xl"
          animate={{
            x: [0, -150, 100, 0],
            y: [0, 80, -120, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ bottom: "-10%", left: "5%" }}
        />
        <motion.div
          className="fixed w-[700px] h-[700px] bg-black/30 rounded-full blur-3xl"
          animate={{
            x: [0, 120, -80, 0],
            y: [0, -70, 130, 0],
            scale: [0.4, 0.6, 0.4, 0.5],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ top: "15%", left: "10%" }}
        />
      </div>
    </div>
  );
};
