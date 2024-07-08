import { motion, Variants } from "framer-motion";

interface ImageProps {
  src: string;
  alt: string;
  left?: string;
  top?: string;
  right?: string;
  rotate: number;
  index: number; // Add index prop
  variants: Variants; // Add variants prop
}

function Card({
  src,
  alt,
  left,
  top,
  right,
  rotate,
  index,
  variants,
}: ImageProps) {
  return (
    <motion.div
      style={{
        position: "absolute",
        left: left,
        top: top,
        right: right,
        transformOrigin: "center center",
      }}
      custom={index}
      initial="hidden"
      animate="show"
      exit="hidden"
      variants={variants}
    >
      <div
        className="imgCard"
        style={{
          transform: `rotate(${rotate}deg) scale(0.8)`,
        }}
      >
        <img src={src} alt={alt} />
      </div>
    </motion.div>
  );
}

export default Card;
