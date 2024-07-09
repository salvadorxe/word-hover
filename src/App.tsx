import { useState, useEffect, useCallback } from "preact/hooks";
import "./app.css";

import Card from "./components/Card";
import { foodImages, sightImages, nightEmojis } from "./ImageData";
import HoverableWord from "./components/HoverableWord";
import { AnimatePresence, motion, Variants } from "framer-motion";

type HoverState = {
  isHovering: boolean;
  category: string | null;
};

export function App() {
  const [hoverState, setHoverState] = useState<HoverState>({
    isHovering: false,
    category: null,
  });

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

  const handleHover = useCallback((category: string) => {
    setHoverState({ isHovering: true, category });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoverState({ isHovering: false, category: null });
  }, []);

  const getImagesToDisplay = () => {
    switch (hoverState.category) {
      case "food":
        return foodImages;
      case "sights":
        return sightImages;
      case "nightlife":
        return nightEmojis;
      default:
        return [];
    }
  };

  // useEffect(() => {
  //   const imagesToPreload = [...foodImages, ...sightImages, ...nightEmojis];
  //   imagesToPreload.forEach((image) => {
  //     if (image.src.startsWith("http")) {
  //       // Only preload actual images, not emoji strings
  //       const img = new Image();
  //       img.src = image.src;
  //     }
  //   });
  // }, []);

  return (
    <>
      <div className="content">
        <div className="logo">
          <i className="fa-solid fa-earth-americas icon"></i>
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
                onMouseLeave={handleMouseLeave}
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
              <span
                onMouseEnter={() => handleHover("nightlife")}
                onMouseLeave={handleMouseLeave}
                className="hoverable"
              >
                <HoverableWord
                  text="night-life"
                  color="#9b9b9b"
                  hoverColor="#E136C6"
                />
              </span>
              , and more.
            </span>
          </h1>
        </div>
        <div className="search">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="Search for new destinations" />
        </div>

        <AnimatePresence mode="wait" initial={false}>
          {hoverState.isHovering && hoverState.category && (
            <motion.div
              key={hoverState.category}
              variants={containerVariants}
              initial="hidden"
              animate="show"
              exit="hidden"
              transition={{ duration: 0.2 }}
            >
              {getImagesToDisplay().map((item, index) => (
                <Card
                  key={`${hoverState.category}-${index}`}
                  index={index}
                  content={item.src}
                  alt={`${item.category} Image ${index + 1}`}
                  left={item.left}
                  top={item.top}
                  right={item.right}
                  rotate={item.rotate}
                  variants={cardVariants}
                  isEmoji={item.category === "nightlife"}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
