import { useState } from "preact/hooks";
import "./app.css";

import Card from "./components/Card";
import { foodImages } from "./ImageData";
import HoverableWord from "./components/HoverableWord";
import { AnimatePresence, motion, Variants } from "framer-motion";

export function App() {
  const [showCards, setShowCards] = useState(false);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Delay between each child
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, x: 0, y: 0 },
    show: (i: number) => ({
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
      rotate: 0,
      transition: {
        delay: i * 0.05,
        type: "spring",
        stiffness: 250,
        damping: 10,
      },
    }),
    exit: { opacity: 0, scale: 0.8 },
  };

  const getImagesToDisplay = () => {
    return foodImages.filter((image) => image.category === "food");
  };

  const handleHover = (category: string) => {
    setShowCards(category === "food");
  };

  return (
    <>
      <div className="content">
        <div className="logo">
          <i className="fa-solid fa-earth-americas emoji"></i>
        </div>
        <div className="heading">
          <h1 id="title">
            <span className="line1">
              Discover Central American{" "}
              <span
                onMouseEnter={() => handleHover("food")}
                onMouseLeave={() => setShowCards(false)}
                className="hoverable"
              >
                <HoverableWord
                  text="food"
                  color="#9b9b9b"
                  hoverColor="#02DE5A"
                />
              </span>
              ,
            </span>
            <span className="line2">
              {" "}
              <HoverableWord
                text="sights"
                color="#9b9b9b"
                hoverColor="#00CCE8"
              />
              , &nbsp;
              <HoverableWord
                text="night-life"
                color="#9b9b9b"
                hoverColor="#E136C6"
              />
              , and more.
            </span>
          </h1>
        </div>

        <AnimatePresence>
          {showCards && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              {getImagesToDisplay().map((image, index) => (
                <Card
                  key={index}
                  index={index} // Pass index to Card
                  src={image.src}
                  alt={`${image.category} Image ${index + 1}`}
                  left={image.left}
                  top={image.top}
                  right={image.right}
                  rotate={image.rotate}
                  variants={cardVariants} // Pass variants to Card
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
