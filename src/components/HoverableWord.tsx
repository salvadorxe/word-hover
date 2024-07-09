import { motion } from "framer-motion";

interface HoverProps {
  text: string;
  color: string;
  hoverColor: string;
}

function HoverableWord(props: HoverProps) {
  return (
    <motion.div
      transition={{ type: "easeInOut", duration: 0.5 }}
      style={{
        display: "inline-block",
        position: "relative",
      }}
    >
      <motion.span
        whileHover={{ color: props.hoverColor }}
        transition={{ type: "easeInOut", duration: 0.2 }}
        style={{
          cursor: "pointer",
          color: props.color,
          zIndex: 1,
          position: "relative",
        }}
      >
        <span className="shimmer">{props.text}</span>
      </motion.span>
    </motion.div>
  );
}

export default HoverableWord;
