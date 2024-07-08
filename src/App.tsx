import { useState, useEffect } from "preact/hooks";
import "./app.css";

import Card from "./components/Card";
import { foodImages, sightImages } from "./ImageData";
import HoverableWord from "./components/HoverableWord";
import { AnimatePresence, motion, Variants } from "framer-motion";

export function App() {
  const [category, setCategory] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.01,
        duration: 0.2,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.03,
        type: "spring",
        stiffness: 250,
        damping: 20,
      },
    }),
    exit: { opacity: 0, scale: 0.8 },
  };

  const handleHover = (newCategory: string) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCategory(newCategory);
  };

  const handleMouseLeave = () => {
    setCategory(null);
  };

  const getImagesToDisplay = () => {
    switch (category) {
      case "food":
        return foodImages;
      case "sights":
        return sightImages;
      default:
        return [];
    }
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
                onMouseLeave={handleMouseLeave}
                className="hoverable"
              >
                <HoverableWord
                  text="food"
                  color="#9b9b9b"
                  hoverColor="#02DE5A"
                />
              </span>
              ,{" "}
              <span
                onMouseEnter={() => handleHover("sights")}
                onMouseLeave={() => setCategory(null)}
                className="hoverable"
              >
                <HoverableWord
                  text="sights"
                  color="#9b9b9b"
                  hoverColor="#00CCE8"
                />
              </span>
              ,
            </span>
            <span className="line2">
              {" "}
              <HoverableWord
                text="night-life"
                color="#9b9b9b"
                hoverColor="#E136C6"
              />
              , and more.
            </span>
          </h1>
        </div>

        <AnimatePresence
          mode="wait"
          onExitComplete={() => setIsAnimating(false)}
          initial={false}
        >
          {category !== null && (
            <motion.div
              key={category}
              variants={containerVariants}
              initial="hidden"
              animate="show"
              exit="hidden"
              onAnimationComplete={() => setIsAnimating(false)}
              transition={{ duration: 0.2 }}
            >
              {getImagesToDisplay().map((image, index) => (
                <Card
                  key={index}
                  index={index}
                  src={image.src}
                  alt={`${image.category} Image ${index + 1}`}
                  left={image.left}
                  top={image.top}
                  right={image.right}
                  rotate={image.rotate}
                  variants={cardVariants}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
