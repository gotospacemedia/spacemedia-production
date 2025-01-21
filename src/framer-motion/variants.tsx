export const sectionVariants = ({
  from,
}: {
  from: "left" | "right" | "top" | "bottom";
}) => ({
  hidden: {
    opacity: 0,
    x: from === "left" ? -200 : from === "right" ? 200 : 0,
    y: from === "bottom" ? 200 : from === "top" ? -200 : 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: "tween",
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
});

export const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: "tween",
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

export const fadeInVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      duration: 2,
    },
  },
};

export const modalVariants = {
  hidden: {
    opacity: 0,
    x: -1000,
    y: -500,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: "spring",
      staggerChildren: 0.01,
      stiffness: 80,
      mass: 0.7,
    },
  },
};

export const rightSideVariants = {
  hidden: {
    opacity: 0,
    x: "100%",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.01,
      type: "spring",
      when: "beforeChildren",
      stiffness: 80,
      mass: 0.3,
    },
  },
};

export const leftSideVariants = {
  hidden: {
    opacity: 0,
    x: "-100%",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.01,
      type: "spring",
      when: "beforeChildren",
      stiffness: 80,
      mass: 0.3,
    },
  },
};

export const bottomSideVariants = {
  hidden: {
    opacity: 0,
    y: "20%",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.01,
      type: "spring",
      when: "beforeChildren",
      stiffness: 80,
      mass: 0.3,
    },
  },
};

export const zoomVariants = {
  scaleup: {
    scale: 1,
  },
  scaledown: {
    scale: 0,
    transition: {
      type: "tween",
      delay: 10500,
      stiffness: 400,
      damping: 4,
      duration: 10,
    },
  },
};
