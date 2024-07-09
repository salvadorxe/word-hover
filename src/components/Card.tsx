import { motion, Variants } from "framer-motion";

interface CardProps {
  content: string;
  alt: string;
  left?: string;
  top?: string;
  right?: string;
  rotate: number;
  index: number;
  variants: Variants;
  isEmoji: boolean;
}

function Card({
  content,
  alt,
  left,
  top,
  right,
  rotate,
  index,
  variants,
  isEmoji,
}: CardProps) {
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
        {isEmoji ? (
          <span className="emoji" role="img" aria-label={alt}>
            {content}
          </span>
        ) : (
          <img src={content} alt={alt} />
        )}
      </div>
    </motion.div>
  );
}

export default Card;
