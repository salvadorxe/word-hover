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
        transform: `rotate(${rotate}deg) scale(0.8) `,
        transformOrigin: "center bottom",
      }}
      custom={index} // Pass index to custom
      initial="hidden"
      animate="show"
      exit="hidden"
      variants={variants} // Use passed variants
    >
      <div className="imgCard">
        <img src={src} alt={alt} />
      </div>
    </motion.div>
  );
}

export default Card;
