import { motion } from "framer-motion";

interface HoverProps {
  text: string;
  color: string;
  hoverColor: string;
}

function HoverableWord(props: HoverProps) {
  return (
    <motion.span
      whileHover={{ color: props.hoverColor }}
      transition={{ type: "easeInOut", duration: 0.2 }}
      style={{
        cursor: "pointer",
        color: props.color,
      }}
    >
      {props.text}
    </motion.span>
  );
}

export default HoverableWord;
